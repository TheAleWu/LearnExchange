import {Component, Input} from '@angular/core';
import {Alert, CorrectAnswerAlert, WrongAnswerAlert} from "./misc.classes";

@Component({
  selector: 'app-short-input',
  templateUrl: './short-input.component.html',
  styleUrls: ['./short-input.component.css']
})
export class ShortInputComponent {

  @Input() data: ShortInput = {
    title: "",
    description: "Please configure this component...",
    checkAnswer: () => false
  };
  parseError: string = "";
  answer: string = "";
  feedback: Alert | undefined;

  validate() {
    if (this.data.checkAnswer(this.answer)) {
      this.feedback = new CorrectAnswerAlert(this.answer);
    } else {
      this.feedback = new WrongAnswerAlert(this.answer);
      this.answer = "";
    }
  }
}

export class ShortInput {

  title: string = "";
  description: string = "";

  // noinspection JSUnusedLocalSymbols Required for type
  checkAnswer(answer: string) {
    return false;
  }
}
