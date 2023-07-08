import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";

describe('HeroesComponent (shallow test)',()=>{
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService: any; 
    let HEROES: Hero[];

    beforeEach(()=>{
        HEROES = [
            { id: 1, name: 'Super Dude' },
            { id: 2, name: 'Wonder Woman' },
            { id: 3, name: 'Super Programmierer' },
          ];
          

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero']);

        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [{ provide: HeroService, useValue: mockHeroService}],
            schemas: [NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(HeroesComponent);

    })

    it('should set heroes from service',()=>{
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
        //expect(true).toBe(true);  // dummy test
    })

})