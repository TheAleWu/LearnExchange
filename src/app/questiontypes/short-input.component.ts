import {Component, Input} from '@angular/core';
import {Alert, CorrectAnswerAlert, WrongAnswerAlert} from "../common/misc.classes";
import {QuestionType} from "../common/misc.enums";
import {Question} from "../common/misc.interfaces";

const {SHORT_INPUT} = QuestionType;

@Component({
  selector: 'qt-short-input',
  templateUrl: './short-input.component.html',
  styleUrls: ['./short-input.component.css']
})
export class ShortInputComponent {

  @Input() data: ShortInput = {
    type: QuestionType.SHORT_INPUT,
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

export class ShortInput implements Question {

  title?: string = "";
  description: string = "";
  type: QuestionType = SHORT_INPUT;

  // noinspection JSUnusedLocalSymbols Required for type
  checkAnswer(answer: string) {
    return false;
  }
}
