import {QuestionType} from "./misc.enums";
import {MultipleChoice} from "../questiontypes/multiple-choice.component";
import {ShortInput} from "../questiontypes/short-input.component";

type QuestionTypes = MultipleChoice | ShortInput;

export interface Collapsable {
  collapsableName: string;

  questions: Array<QuestionTypes>
}

export interface Question {
  type: QuestionType
}
