import { Component } from '@angular/core';
import { ApiDefinition, Path } from "../models/api-definition";
import { ApiDefinitionService } from "../services/api-definition.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    apiDefinition: ApiDefinition;
    groupedPaths: Map<string, Path[]>;

    constructor(private apiInfoService: ApiDefinitionService) {
        this.apiDefinition = apiInfoService.getApiDefinition();
        this.groupedPaths = apiInfoService.getGroupedByPath();
    }
}
