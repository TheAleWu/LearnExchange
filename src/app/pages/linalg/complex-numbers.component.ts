import {Component} from '@angular/core';
import {MultipleChoice} from "../../questiontypes/multiple-choice.component";
import {Collapsable} from "../../common/misc.interfaces";
import {ShortInput} from "../../questiontypes/short-input.component";
import {castTo} from "../../common/utitilies";
import {QuestionType} from "../../common/misc.enums";
import {$MultipleChoice, $ShortInput} from "../../questiontypes/utilities.question";

@Component({
  selector: 'app-week1',
  templateUrl: './complex-numbers.component.html',
  styleUrls: ['./complex-numbers.component.css']
})
export class ComplexNumbersComponent {

  categories: Collapsable[] = [
    new Addition(),
    new Multiplication()
  ]

  protected readonly $multipleChoiceCast = castTo<MultipleChoice>();
  protected readonly $shortInputCast = castTo<ShortInput>();
  protected readonly QuestionType = QuestionType;
}

class Addition implements Collapsable {

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
    wenn $v=-8i$ und $w=2.5$ gegeben sind?</center>
    $$z=v+w$$`, [
    {
      value: "z=-2.5+8i",
      correct: false,
      usesKaTeX: true
    },
    {
      value: "z=2.5-8i",
      correct: true,
      usesKaTeX: true
    },
    {
      value: "z=-2.5-8i",
      correct: false,
      usesKaTeX: true
    },
    {
      value: "z=-5.5+2.5i",
      correct: false,
      usesKaTeX: true
    }
  ]);
  addition3 = $MultipleChoice(`
    <center>Welches Ergebnis erzeugt die folgende Addition?</center>
    $$(4+3i)+(-5+2i)$$`, [
    {
      value: "-1+5i",
      correct: true,
      usesKaTeX: true
    },
    {
      value: "9-i",
      correct: false,
      usesKaTeX: true
    },
    {
      value: "1-5i",
      correct: false,
      usesKaTeX: true
    },
    {
      value: "-9+i",
      correct: false,
      usesKaTeX: true
    }
  ]);
  addition4 = $MultipleChoice(`
    <center>Welches Ergebnis erzeugt die folgende Addition?</center>
    $$\\frac{6-4i}{2}+5$$`, [
    {
      value: "\\frac{11-4i}{2}",
      correct: false,
      usesKaTeX: true
    },
    {
      value: "\\frac{16-2i}{2}",
      correct: false,
      usesKaTeX: true
    },
    {
      value: "\\frac{16-4i}{2}",
      correct: true,
      usesKaTeX: true
    },
    {
      value: "\\frac{16+6i}{2}",
      correct: false,
      usesKaTeX: true
    }
  ]);
  addition5 = $ShortInput(`
    <center>Welchen Wert besitzt $z$, sodass die Gleichung wahr ist?</center>
    $$\\frac{4}7+\\frac{3i}{5}\\quad=\\quad\\frac{-5+19i}{30}+\\frac{z}{30}$$`,
    answer => answer.toLowerCase().replaceAll(" ", "") === "25+2i",
    "",
    true
  );

  questions = [
    this.addition1,
    this.addition2,
    this.addition3,
    this.addition4,
    this.addition5]
  collapsableName = "Addition zweier komplexer Zahlen";
}

class Multiplication implements Collapsable {
  ph = $MultipleChoice(`abc`, [])

  questions = [this.ph];
  collapsableName: string = "Multiplikation zweier komplexer Zahlen";

}
