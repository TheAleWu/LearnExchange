import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {KatexModule} from "ng-katex";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {de_DE, NZ_I18N} from 'ng-zorro-antd/i18n';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzSpaceModule} from "ng-zorro-antd/space";
import {CommonsModule} from "./common/commons.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KatexModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NzToolTipModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzSpaceModule,
    CommonsModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: de_DE}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
