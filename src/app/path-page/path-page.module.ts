import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathPageComponent } from './path-page.component';
import { MethodInfoComponent } from './components/method-info/method-info.component';

@NgModule({
    declarations: [
        PathPageComponent,
        MethodInfoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PathPageModule {
}
