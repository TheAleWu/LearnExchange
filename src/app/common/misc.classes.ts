export class Alert {
  title: string = "";
  description: string | null = null;
  type: 'success' | 'info' | 'warning' | 'error' = "info";
  showIcon: boolean = true;
}

export class CorrectAnswerAlert extends Alert {

  constructor(answer: string) {
    super();
    super.title = "Good Job!";
    super.description = "The given answer \"" + answer + "\" was correct :)";
    super.type = "success";
    super.showIcon = true;
  }
}

export class WrongAnswerAlert extends Alert {

  constructor(answer: string) {
    super();
    super.title = "Wrong answer!";
    super.description = "The given answer \"" + answer + "\" is not correct... Try again.";
    super.type = "error";
    super.showIcon = true;
  }
}
