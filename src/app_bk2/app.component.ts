import { Component } from '@angular/core';
//import { Member } from './member';
import { MembertableComponent } from './membertable.component';

@Component({
    selector: 'app-root',
    template: `<h1>{{name}}年度役員選挙</h1>
      <membertable></membertable>`,
})
export class AppComponent {
    name = '2017';
}
