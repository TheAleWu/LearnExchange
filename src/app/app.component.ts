import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnExchange';

  items: MenuItem[] = [
    {
      label: 'Index',
      routerLink: '/'
    },
    {
      label: 'Test',
      routerLink: '/test'
    }
  ]
}
