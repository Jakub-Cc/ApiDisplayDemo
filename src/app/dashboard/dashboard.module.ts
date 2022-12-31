import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { InfoBoxComponent } from "./components/info-box/info-box.component";
import { PathsGroupComponent } from "./components/paths-group/paths-group.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        DashboardComponent,
        InfoBoxComponent,
        PathsGroupComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class DashboardModule {
}
