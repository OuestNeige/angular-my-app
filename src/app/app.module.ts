import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MembertableComponent } from './membertable.component';

@NgModule({
  declarations: [
    AppComponent,
    MembertableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [{path: 'membertable', component: MembertableComponent },]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
