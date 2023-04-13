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
import {registerLocaleData} from '@angular/common';
import de from '@angular/common/locales/de';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KatexModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzToolTipModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: de_DE}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
