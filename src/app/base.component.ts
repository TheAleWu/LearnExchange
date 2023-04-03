import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  title = 'LearnExchange';
  items: MenuItem[] = [
    {
      label: 'File',
      icon: 'pi pi-file',
      routerLink: 'test'
    }
  ]
}
