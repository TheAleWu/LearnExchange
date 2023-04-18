import {Component} from '@angular/core';
import {MultipleChoice} from "../../common/multiple-choice.component";
import {ShortInput} from "../../common/short-input.component";

@Component({
  selector: 'app-week1',
  templateUrl: './week1.component.html',
  styleUrls: ['./week1.component.css']
})
export class Week1Component {

  question1: MultipleChoice = {
    title: "Testfrage",
    description: `
    Ist die folgende Aussage korrekt?
    $$\\int e^x dx = e^x + C$$`,
    options: [{
      value: "Ja",
      correct: true
    }, {
      value: "Nein",
      correct: false
    }]
  };
  question2: ShortInput = {
    title: "Zweite Testfrage",
    description: `
    Was sind die ersten drei Buchstaben des Alphabets`,
    checkAnswer: a => a.replaceAll(" ", "").toLowerCase() === "abc"
  }
}
