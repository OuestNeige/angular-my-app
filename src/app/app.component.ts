import { Component } from '@angular/core';
//import { Member } from './member';
import { MembertableComponent } from './membertable.component';

@Component({
    selector: 'app-root',
    template: `<h1>{{name}}年度役員選挙</h1>
      <a routerLink="/membertable" routerLinkActive="active">被選挙人名簿を見る</a>
      <a routerLink="/poll" routerLinkActive="active">中間報告を見る</a>
      <div class="outlet">
        <router-outlet></router-outlet>
      </div>
      `,
      styleurls: ['./app.component.css']
})
export class AppComponent {
    name = '2017';
}
