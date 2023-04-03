import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  title = 'LearnExchange';

  items: NbMenuItem[] = [
    {
      title: 'Shopping Bag',
    },
    {
      title: 'Orders',
    },
  ];
}
