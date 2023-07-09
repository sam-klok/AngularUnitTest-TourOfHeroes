import { inject, TestBed } from "@angular/core/testing"
import { HeroService } from "./hero.service"
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('HeroService', ()=>{
    let mockMessageService: any;
    let httpTestingController: HttpTestingController;
    let service: HeroService;

    beforeEach(()=>{
        mockMessageService = jasmine.createSpyObj(['add'])

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers:[
                HeroService,
                {provide: MessageService, useValue: mockMessageService}
            ]
        })

        httpTestingController = TestBed.inject(HttpTestingController);
        let msgSvc = TestBed.inject(MessageService);
        service = TestBed.inject(HeroService);
    })

    describe('getHero',()=>{
        it('should call get with correct url',()=>{
                service.getHero(4).subscribe(hero=>{
                    expect(hero.id).toBe(4);  // check ID
                });
                const req = httpTestingController.expectOne('api/heroes/4'); // check URL
                req.flush({id:4,name:"Super Dude"});
                expect(req.request.method).toBe('GET'); // check request method
                httpTestingController.verify();
            }
        )
    })
})