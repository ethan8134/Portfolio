import { ChangeDetectionStrategy, Component } from '@angular/core';
import { content, type Language, type PortfolioContent } from './i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  language: Language = 'fr';
  darkMode = false;

  constructor() {
    history.scrollRestoration = 'manual';

    if (window.location.hash) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
    this.updateDocumentMetadata();
  }

  get text(): PortfolioContent {
    return content[this.language];
  }

  setLanguage(language: Language): void {
    this.language = language;
    document.documentElement.lang = language;
    this.updateDocumentMetadata();
  }

  private updateDocumentMetadata(): void {
    const metadata = content[this.language].meta;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark', this.darkMode);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      this.darkMode ? '#171D30' : '#212E53'
    );
  }
}
