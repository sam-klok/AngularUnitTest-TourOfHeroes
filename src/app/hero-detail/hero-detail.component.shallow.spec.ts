import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroDetailComponent } from "./hero-detail.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('HeroDetailComponent (shallow test)',()=>{
    let fixture: ComponentFixture<HeroDetailComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [HeroDetailComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroDetailComponent);
        
    })

    xit('should have correct hero', () => {
        fixture.componentInstance.hero = {id:1, name:'Super Dude'};
        expect(fixture.componentInstance.hero.name).toEqual('Super Dude');
    })

    xit('should render hero name', () => {
        fixture.componentInstance.hero = {id:1, name:'Super Dude'};
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Dude');
    })
})