import { ChangeDetectionStrategy, Component } from '@angular/core';
import { content, Language, PortfolioContent } from './i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  language: Language = 'fr';
  darkMode = false;

  get text(): PortfolioContent {
    return content[this.language];
  }

  setLanguage(language: Language): void {
    this.language = language;
    document.documentElement.lang = language;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark', this.darkMode);
  }
}
