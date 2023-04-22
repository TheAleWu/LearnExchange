export class Alert {
  title: string = "";
  description: string = "";
  type: 'success' | 'info' | 'warning' | 'error' = "info";
  showIcon: boolean = true;
  katex: boolean = false;
}

export class CorrectAnswerAlert extends Alert {

  constructor(answer: string, katex: boolean = false) {
    super();
    super.title = "Good Job!";
    const k = (katex ? '$' : '');
    super.description = "The given answer \"" + k + answer + k + "\" was correct :)";
    super.type = "success";
    super.showIcon = true;
    super.katex = katex;
  }
}

export class WrongAnswerAlert extends Alert {

  constructor(answer: string, katex: boolean = false) {
    super();
    super.title = "Wrong answer!";
    const k = (katex ? '$' : '');
    super.description = "The given answer \"" + k + answer + k + "\" is not correct... Try again.";
    super.type = "error";
    super.showIcon = true;
    super.katex = katex;
  }
}
