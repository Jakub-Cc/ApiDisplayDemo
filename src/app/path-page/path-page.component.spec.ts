import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathPageComponent } from './path-page.component';
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";


describe('PathPageComponent', () => {
    let component: PathPageComponent;
    let fixture: ComponentFixture<PathPageComponent>;

    describe("[CLASS]", () => {
        let mockActivatedRoute: any;
        let mockRouter: any;
        let mockApiDefinitionService: any;

        beforeEach(() => {
            mockRouter = {navigate: jest.fn()};
        })
        it('should navigate back to dashboard when params not provided', () => {
            mockActivatedRoute = {params: of(null)};
            component = new PathPageComponent(mockActivatedRoute, mockRouter, mockApiDefinitionService);
            expect(mockRouter.navigate).toHaveBeenCalled();
        });

        it('should navigate back to dashboard when params have no definition', () => {
            mockActivatedRoute = {params: of({path: 'path'})};
            mockApiDefinitionService = {getPathDefinition: jest.fn()};
            component = new PathPageComponent(mockActivatedRoute, mockRouter, mockApiDefinitionService);
            expect(mockRouter.navigate).toHaveBeenCalled();
        });

        it('should stay on page', () => {
            mockActivatedRoute = {params: of({path: 'path'})};
            mockApiDefinitionService = {getPathDefinition: jest.fn().mockReturnValue(true)};
            component = new PathPageComponent(mockActivatedRoute, mockRouter, mockApiDefinitionService);
            expect(mockRouter.navigate).not.toHaveBeenCalled();
        });
    })
    describe('[DOM]', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [PathPageComponent],
                providers: [
                    {
                        provide: ActivatedRoute,
                        useValue: {
                            params: of([{path: '1'}]),
                        },
                    },
                ]
            }).compileComponents();
            fixture = TestBed.createComponent(PathPageComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    })

});
