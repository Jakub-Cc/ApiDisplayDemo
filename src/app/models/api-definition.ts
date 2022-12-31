export interface ApiDefinition {
    swagger: string;
    info: Info;
    host: string;
    basePath: string;
    tags: any;
    schemes: any;
    paths: Path[];
    securityDefinitions: any;
    definitions: any;
    externalDocs: any;
}

export interface Info {
    description: string;
    version: string;
    title: string;
    termsOfService: string;
    contact: Contact;
    license: License;
}

export interface Contact {
    email: string;
}

export interface License {
    name: string;
    url: string;
}

export interface Path {
    path: string;
    operations: Operation[];
}

export interface Operation {
    type: string
    tags: string[] | null;
    summary: string;
    description: string;
    operationId: string;
    consumes: string[] | null;
    produces: string[] | null;
    parameters: ParametersEntity[] | null;
    parametersDesc: string;
    responses: ResponsesEntity[] | null;
    responsesDesc: string;
    security: any;
}

export interface ParametersEntity {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
    format?: string | null;
}

export interface ResponsesEntity {
    code: string;
    description: string;
    schema?: any;
    headers?: any;
}


