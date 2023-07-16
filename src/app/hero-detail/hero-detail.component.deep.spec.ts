import { Directive, Input } from "@angular/core";
import { HeroDetailComponent } from "./hero-detail.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "../heroes/heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { Hero } from "../hero";

// mocking (stab) router link directive
@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick()'}
})
export class RouterLinkDirectiveStub{
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick(){
        this.navigatedTo = this.linkParams;
    }
}

describe('HeroesDetailComponent (deep test) 2',()=>{
    let fixture: ComponentFixture<HeroDetailComponent>;
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
            declarations: [HeroDetailComponent, RouterLinkDirectiveStub],
            providers: [{ provide: HeroService, useValue: mockHeroService}],
            //imports: [RouterTestingModule],
            //schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroDetailComponent);
    })

    xit('should render each hero as a HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        const HeroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroDetailComponent));
        expect(HeroComponentDEs.length).toEqual(3);
        for(let i=0;i<HeroComponentDEs.length;i++){
            expect(HeroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);
        }
        
    })

    xit('should have the correct route for the first hero',()=>{
        const HeroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroDetailComponent));
        fixture.detectChanges();

        let routerLink = HeroComponentDEs[0]
            .query(By.directive(RouterLinkDirectiveStub))
            .injector.get(RouterLinkDirectiveStub);

        HeroComponentDEs[0].query(By.css('a')).triggerEventHandler('click',null);

        expect(routerLink.navigatedTo).toBe('/detail/1');
    })
})