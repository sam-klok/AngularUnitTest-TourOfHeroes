import { ExponentialStrengthPipe } from "./exponential-strength.pipe";

describe('ExponentialStrengthPipe', ()=>{
    it('should display 3 (raised) to the (power of) 5 as 243 ', ()=>{
        let pipe = new ExponentialStrengthPipe();
        expect (pipe.transform(3,5)).toEqual(243);
    })
})