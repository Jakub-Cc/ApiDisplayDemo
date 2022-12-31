import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsGroupComponent } from './paths-group.component';

describe('PathsGroupComponent', () => {
    let component: PathsGroupComponent;
    let fixture: ComponentFixture<PathsGroupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PathsGroupComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PathsGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
