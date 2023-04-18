import {Component, Input, OnInit} from '@angular/core';
import {Alert, CorrectAnswerAlert, WrongAnswerAlert} from "./misc.classes";
import {parse} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() data: MultipleChoice = {
    title: "",
    description: "Please configure this component...",
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
    if (this.selectedOption === undefined) return;
    if (this.correctAnswers.includes(this.selectedOption)) {
      this.feedback = new CorrectAnswerAlert(this.selectedOption);
    } else {
      this.feedback = new WrongAnswerAlert(this.selectedOption);
      this.selectedOption = undefined;
    }
  }

  protected readonly parse = parse;
}

export class MultipleChoice {

  title: string = "";
  description: string = "";
  options: MultipleChoiceOption[] = [];
}

export class MultipleChoiceOption {

  value: string = "";
  correct: boolean = false;
}
