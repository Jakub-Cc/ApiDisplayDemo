import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodInfoComponent } from './method-info.component';

describe('MethodInfoComponent', () => {
    let component: MethodInfoComponent;
    let fixture: ComponentFixture<MethodInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MethodInfoComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(MethodInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
