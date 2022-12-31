import { Component, Input } from '@angular/core';
import { Path } from "../../../models/api-definition";
import { Router } from "@angular/router";

@Component({
    selector: 'app-paths-group',
    templateUrl: './paths-group.component.html',
    styleUrls: ['./paths-group.component.scss']
})
export class PathsGroupComponent {

    @Input()
    paths: Path[] = [];

    @Input()
    basePath: string = "";

    folded: boolean = true;

    constructor(private router: Router) {
    }

    headerClicked() {
        this.folded = !this.folded;
    }

    pathClicked(path: Path) {
        this.router.navigate(['path', {path: path.path}]);
    }
}
