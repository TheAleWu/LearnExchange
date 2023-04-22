import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {LinalgRoutingModule} from "./linalg-routing.module";
import {KatexModule} from "ng-katex";
import {ComplexNumbersComponent} from './complex-numbers.component';
import {CommonsModule} from "../../common/commons.module";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NgForOf, NgIf} from "@angular/common";

@NgModule({
  imports: [LinalgRoutingModule, KatexModule, CommonsModule, NzCollapseModule, NgForOf, NgIf],
  declarations: [IndexComponent, ComplexNumbersComponent],
  exports: [IndexComponent]
})
export class LinalgModule {
}
