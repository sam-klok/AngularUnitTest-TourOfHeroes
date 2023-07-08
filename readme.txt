Learning how to write unit tests in Angular.
Based on Pluralsight training: Unit Testing in Angular 12 by Joe Eames
Which have obsolete and non-working example here: https://github.com/joeeames/PSAngularUnitTestingCourse.git
So I grabbed recent Tour Of Heroes example, and trying to recreate tests described by Joe Eames.
Source code for Tour Of Heroes: https://angular.io/guide/example-apps-list#tour-of-heroes-completed-application

To run application:
>npm start

To run test:
>npm test

Thank you
Sam Klokov

Other related articles:
1. Angular Pipes:
https://angular.io/guide/pipes

2. Exponentiation (math)
https://en.wikipedia.org/wiki/Exponentiation

3. If you meet Error: 
NG0303: Can't bind to 'routerLink' since it isn't a known property of 'a' (used in the 'HeroesComponent' component template).
Angular Test: NullInjectorError: No provider for ActivatedRoute
then add RouterTestingModule (not RouterModule)
https://stackoverflow.com/questions/53654341/angular-7-test-nullinjectorerror-no-provider-for-activatedroute
