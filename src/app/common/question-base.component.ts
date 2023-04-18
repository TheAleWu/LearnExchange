import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-question-base',
  templateUrl: './question-base.component.html',
  styleUrls: ['./question-base.component.css']
})
export class QuestionBaseComponent {

  @Input() title: string | undefined;
  @Input() parseError: string = "";

}
