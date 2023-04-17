import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  selected: string | undefined;
  @Input() data: MultipleChoice = {
    title: "",
    description: "Please configure this component...",
    options: []
  };
  error: string = "";

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
    if (!anyCorrect) this.error = "None of the given answers is marked as correct.";
    if (anyAnswersEmpty) this.error = "At least one of the given answers is empty.";
  }

  validate() {

  }

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
