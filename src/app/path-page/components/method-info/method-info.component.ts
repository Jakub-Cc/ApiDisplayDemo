import { Component, Input } from '@angular/core';
import { Operation } from "../../../models/api-definition";

@Component({
    selector: 'app-method-info',
    templateUrl: './method-info.component.html',
    styleUrls: ['./method-info.component.scss']
})
export class MethodInfoComponent {

    @Input()
    method: Operation | undefined;

    folded: boolean = false;

    headerClicked() {
        this.folded = !this.folded;
    }
}
