import {Component} from '@angular/core';
import {MultipleChoice} from "../../questiontypes/multiple-choice.component";
import {Collapsable} from "../../common/misc.interfaces";
import {ShortInput} from "../../questiontypes/short-input.component";
import {castTo} from "../../common/utitilies";
import {QuestionType} from "../../common/misc.enums";
import {$MultipleChoice} from "../../questiontypes/utilities.question";

@Component({
  selector: 'app-week1',
  templateUrl: './complex-numbers.component.html',
  styleUrls: ['./complex-numbers.component.css']
})
export class ComplexNumbersComponent {

  categories: Collapsable[] = [
    new BasicsOfComplexNumbers(),
    new PolarForm()
  ]

  $multipleChoiceCast = castTo<MultipleChoice>();
  $shortInputCast = castTo<ShortInput>();
  protected readonly QuestionType = QuestionType;
}

class BasicsOfComplexNumbers implements Collapsable {

  addition1 = $MultipleChoice(`
    <center>Was ist das Ergebnis der folgenden Addition,
    wenn $v=4-3i$ und $w=-2-15i$ gegeben sind?</center>
    $$z=v+w$$`, [
    {
      value: "z=6-18i",
      correct: false,
      usesKaTeX: true
    }, {
      value: "z=-2-18i",
      correct: false,
      usesKaTeX: true
    }, {
      value: "z=2-18i",
      correct: true,
      usesKaTeX: true
    }, {
      value: "z=-6-12i",
      correct: false,
      usesKaTeX: true
    }
  ]);
  addition2 = $MultipleChoice(`
  <center>Was ist das Ergebnis der folgenden Addition,
    wenn $v=-8i$ und $w=2,5$ gegeben sind?</center>
    $$z=v+w$$`, [
    {
      value: "z=-2,5+8i",
      correct: false,
      usesKaTeX: true
    },
    {
      value: "z=2,5-8i",
      correct: true,
      usesKaTeX: true
    },
    {
      value: "z=-2,5-8i",
      correct: true,
      usesKaTeX: true
    },
  ])


  questions = [this.addition1, this.addition2]
  collapsableName = "Addition";
}

class PolarForm implements Collapsable {
  collapsableName: string = "Kartesiche Koordinaten und Polarkoordinaten";

  ph = $MultipleChoice(`abc`, [])

  questions = [this.ph];

}
