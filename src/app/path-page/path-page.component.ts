import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiDefinitionService } from "../services/api-definition.service";
import { Path } from "../models/api-definition";

@Component({
    selector: 'app-path-page',
    templateUrl: './path-page.component.html',
    styleUrls: ['./path-page.component.scss']
})
export class PathPageComponent {
    path: Path | undefined;

    constructor(private route: ActivatedRoute, private router: Router, private apiDefinitionService: ApiDefinitionService) {
        this.route.params.subscribe(params => {
            if (params && Object.keys(params).length) {
                this.path = apiDefinitionService.getPathDefinition(params['path']);
            }
            if (!this.path) {
                router.navigate(["dashboard"]);
            }
        });
    }

}
