import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroDetailComponent } from "./hero-detail.component"
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";
import { Location } from '@angular/common';
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";

describe('HeroDetailComponent',()=>{
    let fixture: ComponentFixture<HeroDetailComponent>;
    let mockActivatedRout: any, 
    mockHeroService: any, 
    mockLocation: any;

    beforeEach(()=>{
        mockHeroService = jasmine.createSpyObj(['getHero','updateHero']);
        mockLocation = jasmine.createSpyObj(['back']);
        mockActivatedRout = {
            snapshot: {paramMap: {get: ()=> {return '3';}}}
        }


        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HeroDetailComponent],
            providers:[
                {provide: ActivatedRoute, useValue: mockActivatedRout},
                {provide: HeroService, useValue: mockHeroService},
                {provide: Location, useValue: mockLocation},
            ]
        });

        fixture = TestBed.createComponent(HeroDetailComponent);
        
        mockHeroService.getHero.and.returnValue(of({id: 3, name:'Super Dude'}));
    });

    it('should render hero name in a h2 tag', ()=>{
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPER DUDE');

    });
})