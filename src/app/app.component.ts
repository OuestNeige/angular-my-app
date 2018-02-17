import { Component } from '@angular/core';
//import { Member } from './member';
import { MembertableComponent } from './membertable.component';

@Component({
    selector: 'app-root',
    template: `<h1>{{name}}年度役員選挙</h1>
      <a routerLink="membertable">被選挙人名簿を見る</a>
      <a routerLink="/poll">中間報告を見る</a>
      <router-outlet></router-outlet>
      `,
})
export class AppComponent {
    name = '2017';
}
