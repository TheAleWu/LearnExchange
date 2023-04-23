import {Component, Input, OnInit} from '@angular/core';
import {Alert, CorrectAnswerAlert, WrongAnswerAlert} from "../common/misc.classes";
import {Question} from "../common/misc.interfaces";
import {QuestionType} from "../common/misc.enums";

@Component({
  selector: 'qt-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {
  @Input() data: MultipleChoice = {
    type: QuestionType.MULTIPLE_CHOICE,
    title: "",
    description: "Please configure this component...",
    hardQuestion: false,
    options: []
  };
  private correctAnswers: string[] = [];
  parseError: string = "";
  selectedOption: string | undefined;
  feedback: Alert | undefined;

  ngOnInit() {
    let anyCorrect = false;
    let anyAnswersEmpty = false;
    for (let option of this.data.options) {
      if (option.correct) {
        anyCorrect = true;
        break;
      }
      if (option.value === "") {
        anyAnswersEmpty = true;
        break;
      }
    }
    if (!anyCorrect) {
      this.parseError = "None of the given answers is marked as correct.";
      return;
    }
    if (anyAnswersEmpty) {
      this.parseError = "At least one of the given answers is empty.";
      return;
    }

    this.correctAnswers = this.data.options
      .filter(op => op.correct)
      .map(op => op.value);
  }

  validate() {
    let option = this.data.options
      .filter(op => op.value === this.selectedOption)
      .at(0);
    if (this.selectedOption === undefined || option === undefined) return;
    if (this.correctAnswers.includes(this.selectedOption)) {
      this.feedback = new CorrectAnswerAlert(this.selectedOption, option.usesKaTeX);
    } else {
      this.feedback = new WrongAnswerAlert(this.selectedOption, option.usesKaTeX);
      this.selectedOption = undefined;
    }
  }
}

export class MultipleChoice implements Question {

  title?: string = "";
  description: string = "";
  options: MultipleChoiceOption[] = [];
  type: QuestionType = QuestionType.MULTIPLE_CHOICE;
  hardQuestion: boolean = false;
}

export class MultipleChoiceOption {

  value: string = "";
  correct: boolean = false;
  usesKaTeX?: boolean = false;
}
