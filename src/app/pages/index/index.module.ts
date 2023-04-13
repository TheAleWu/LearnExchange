import { NgModule } from '@angular/core';

import { IndexRoutingModule } from './index-routing.module';

import { IndexComponent } from './index.component';
import {KatexModule} from "ng-katex";


@NgModule({
  imports: [IndexRoutingModule, KatexModule],
  declarations: [IndexComponent],
  exports: [IndexComponent]
})
export class IndexModule { }
