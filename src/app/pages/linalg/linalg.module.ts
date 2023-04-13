import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {LinalgRoutingModule} from "./linalg-routing.module";
import {KatexModule} from "ng-katex";
import {Week1Component} from './week1.component';
import {CommonsModule} from "../../common/commons.module";

@NgModule({
  imports: [LinalgRoutingModule, KatexModule, CommonsModule],
  declarations: [IndexComponent, Week1Component],
  exports: [IndexComponent]
})
export class LinalgModule {
}
