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
    this.iconService.addIconLiteral("fa:table-solid", Icons.tableSolid)
  }
}
