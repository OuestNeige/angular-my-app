import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MembertableComponent } from './membertable.component';
import { PollComponent } from './poll.component';

@NgModule({
  declarations: [
    AppComponent,
    MembertableComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [{path: 'membertable', component: MembertableComponent },
       {path: 'poll', component: PollComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
