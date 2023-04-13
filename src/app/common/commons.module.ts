import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComingSoonComponent} from './coming-soon.component';
import {NzAlertModule} from "ng-zorro-antd/alert";


@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  exports: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    NzAlertModule
  ]
})
export class CommonsModule {
}
