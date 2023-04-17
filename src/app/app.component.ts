import {Component} from '@angular/core';
import {NzIconService} from "ng-zorro-antd/icon";
import {Icons} from "./icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private iconService: NzIconService) {
    this.iconService.addIconLiteral("fa:moon-regular", Icons.moonRegular)
    this.iconService.addIconLiteral("fa:sun-regular", Icons.sunRegular)
    this.iconService.addIconLiteral("fa:clipboard-question-solid", Icons.clipboardQuestionSolid)
  }
}
