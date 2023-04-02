import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {KatexModule} from "ng-katex";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KatexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
