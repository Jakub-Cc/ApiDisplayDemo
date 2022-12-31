import { Component, Input } from '@angular/core';
import { Info } from "../../../models/api-definition";

@Component({
    selector: 'app-info-box',
    templateUrl: './info-box.component.html',
    styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
    @Input()
    info: Info | undefined;
}
