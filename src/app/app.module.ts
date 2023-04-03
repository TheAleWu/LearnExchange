import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BaseComponent} from './base.component';
import {KatexModule} from "ng-katex";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbTabsetModule, NbMenuModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule,
    KatexModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule,
    NbTabsetModule,
    NbMenuModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule {
}
