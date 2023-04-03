import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BaseComponent} from './base.component';
import {KatexModule} from "ng-katex";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    BaseComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    KatexModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule
  ],
  providers: []
})
export class AppModule {
}
