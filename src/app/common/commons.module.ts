import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComingSoonComponent} from './coming-soon.component';
import {MultipleChoiceComponent} from "../questiontypes/multiple-choice.component";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzCardModule} from "ng-zorro-antd/card";
import {ToggleThemeComponent} from './toggle-theme.component';
import {NzAffixModule} from "ng-zorro-antd/affix";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {KatexModule} from "ng-katex";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FormsModule} from "@angular/forms";
import {NzGridModule} from "ng-zorro-antd/grid";
import {ShortInputComponent} from '../questiontypes/short-input.component';
import {QuestionBaseComponent} from '../questiontypes/question-base.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzTagModule} from "ng-zorro-antd/tag";

@NgModule({
  declarations: [
    ComingSoonComponent,
    MultipleChoiceComponent,
    ToggleThemeComponent,
    ShortInputComponent,
    QuestionBaseComponent
  ],
  exports: [
    ComingSoonComponent,
    MultipleChoiceComponent,
    ToggleThemeComponent,
    ShortInputComponent
  ],
  imports: [
    CommonModule,
    NzAlertModule,
    NzCardModule,
    NzAffixModule,
    NzButtonModule,
    NzIconModule,
    KatexModule,
    NzDividerModule,
    NzSelectModule,
    NzRadioModule,
    FormsModule,
    NzGridModule,
    NzInputModule,
    NzBadgeModule,
    NzTagModule
  ]
})
export class CommonsModule {
}
