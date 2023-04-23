import {MultipleChoice, MultipleChoiceOption} from "./multiple-choice.component";
import {QuestionType} from "../common/misc.enums";
import {ShortInput} from "./short-input.component";

export function $MultipleChoice(description: string, options: MultipleChoiceOption[], title?: string, hardQuestion?: boolean): MultipleChoice {
  return {
    title: title,
    type: QuestionType.MULTIPLE_CHOICE,
    description: description,
    hardQuestion: hardQuestion !== undefined && hardQuestion,
    options: options
  };
}

export function $ShortInput(description: string, checkAnswer: (s: string) => boolean, title?: string, hardQuestion?: boolean): ShortInput {
  return {
    title: title,
    type: QuestionType.SHORT_INPUT,
    description: description,
    hardQuestion: hardQuestion !== undefined && hardQuestion,
    checkAnswer: checkAnswer
  };
}
