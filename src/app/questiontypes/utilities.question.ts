import {MultipleChoice, MultipleChoiceOption} from "./multiple-choice.component";
import {QuestionType} from "../common/misc.enums";
import {ShortInput} from "./short-input.component";

export function $MultipleChoice(description: string, options: MultipleChoiceOption[], title?: string): MultipleChoice {
 return {
   title: title,
   type: QuestionType.MULTIPLE_CHOICE,
   description: description,
   options: options
 };
}

export function $ShortInput(description: string, title?: string): ShortInput {
  return {
    title: title,
    type: QuestionType.SHORT_INPUT,
    description: description,
    checkAnswer(answer: string): boolean {
      return answer.toLowerCase().replaceAll(" ", "") === "abc";
    }
  };
}
