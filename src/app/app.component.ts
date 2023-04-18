import {Component} from '@angular/core';
import {NzIconService} from "ng-zorro-antd/icon";
import {Icons} from "./icons";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "";
  constructor(private iconService: NzIconService, translate: TranslateService) {
    this.iconService.addIconLiteral("fa:moon-regular", Icons.moonRegular)
    this.iconService.addIconLiteral("fa:sun-regular", Icons.sunRegular)
    this.iconService.addIconLiteral("fa:clipboard-question-solid", Icons.clipboardQuestionSolid)

    translate.setDefaultLang('en');
    translate.use('en');
  }
}
