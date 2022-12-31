import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayToStringPipe } from "./pipes/array-to-string.pipe";


@NgModule({
    declarations: [
        ArrayToStringPipe
    ],
    exports: [
        ArrayToStringPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
