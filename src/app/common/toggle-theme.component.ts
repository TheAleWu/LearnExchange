import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.css']
})
export class ToggleThemeComponent implements OnInit {

  darkTheme: boolean = true;
  private readonly _dark = "dark";
  private readonly _default = "default";
  private currentTheme: string = this._dark;
  private previousTheme: string = this._default;

  ngOnInit() {
    let theme = localStorage.getItem("user-theme");
    if (theme === "default") {
      this.currentTheme = this._default;
      this.previousTheme = this._dark;
      this.darkTheme = false;
    } else {
      this.currentTheme = this._dark;
      this.previousTheme = this._default;
    }

    this.loadTheme(true)
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    let newTheme = this.previousTheme;
    this.previousTheme = this.currentTheme;
    this.currentTheme = newTheme;

    localStorage.setItem("user-theme", this.currentTheme);

    this.loadTheme();
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  private removeUnusedTheme(theme: string): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  loadTheme(firstLoad = false) {
    const theme = this.currentTheme;
    if (firstLoad) {
      document.documentElement.classList.add(theme);
    }
    this.loadCss(`${theme}.css`, theme).then(
      () => {
        if (!firstLoad) {
          document.documentElement.classList.add(theme);
        }
        this.removeUnusedTheme(this.previousTheme);
      }
    );
  }

  protected readonly document = document;
}
