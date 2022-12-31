import { Injectable } from '@angular/core';
import swagger from "../../../resources/swagger.json"
import {
    ApiDefinition,
    Operation, ParametersEntity,
    Path, ResponsesEntity
} from "../models/api-definition";

@Injectable({
    providedIn: 'root'
})
export class ApiDefinitionService {
    private readonly apiDefinition: ApiDefinition;

    constructor() {
        this.apiDefinition = this.mapSwagger(swagger);
    }

    getApiDefinition(): ApiDefinition {
        return this.apiDefinition;
    }

    getPathDefinition(path: string): Path | undefined {
        return this.apiDefinition.paths.find(value => value.path === path);
    }

    getGroupedByPath(): Map<string, Path[]> {
        const groupedPaths = new Map<string, Path[]>();
        this.apiDefinition.paths.forEach((element) => {
            const basePath = element.path.split('/')[1];
            if (groupedPaths.has(basePath)) {
                groupedPaths.get(basePath)?.push(element);
            } else {
                groupedPaths.set(basePath, [element]);
            }
        });
        return groupedPaths;
    }

    private mapSwagger(swagger: any): ApiDefinition {
        return {
            basePath: swagger.basePath,
            definitions: swagger.basePath,
            externalDocs: swagger.externalDocs,
            host: swagger.host,
            info: swagger.info,
            paths: this.mapPaths(swagger.paths),
            schemes: swagger.schemes,
            securityDefinitions: swagger.securityDefinitions,
            swagger: swagger.swagger,
            tags: swagger.tags
        }
    }

    private mapPaths(paths: any): Path[] {
        return Object.entries(paths).map(([key, value]) => ({path: key, operations: this.mapOperations(value)}));
    }

    private mapOperations(operations: any): Operation[] {
        return Object.entries(operations).map(([key, value]) => {
            let v = value as any;
            return {
                type: key,
                tags: v.tags,
                summary: v.summary,
                description: v.description,
                operationId: v.operationId,
                consumes: v.consumes,
                produces: v.produces,
                parameters: v.parameters,
                parametersDesc: this.mapParametersToDescription(v.parameters),
                responses: this.mapResponses(v.responses),
                responsesDesc: this.mapResponsesToDescription(v.responses),
                security: v.security,
            }
        });
    }

    private mapResponses(responses: any[]): ResponsesEntity[] {
        return Object.entries(responses).map(([key, value]) => ({code: key, ...value}));
    }

    private mapParametersToDescription(parameters: ParametersEntity[]): string {
        if (parameters && parameters.length > 0) {
            return parameters.map(value => `${value.name}${value.required ? '*' : ''} ${this.falsyCheck(value.type)} (${value.in}) - ${this.falsyCheck(value.description)}`).join('\n');
        }
        return 'No parameters';
    }

    private mapResponsesToDescription(responses: any[]): string {
        return Object.entries(responses).map(([key, value]) => (`${key} - ${value.description}`)).join('\n');
    }

    private falsyCheck(value: string): string {
        return Boolean(value) ? value : '';
    }
}
