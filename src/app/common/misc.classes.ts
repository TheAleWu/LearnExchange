export class Alert {
  title: string = "";
  description: string | null = null;
  type: 'success' | 'info' | 'warning' | 'error' = "info";
  showIcon: boolean = true;
}
