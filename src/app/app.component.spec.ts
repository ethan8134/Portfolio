import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('renders the French portfolio by default', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain(
      'Étudiant ingénieur'
    );
    expect(fixture.nativeElement.querySelector('#contact')).not.toBeNull();
  });

  it('switches the document language and translated content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    component.setLanguage('en');
    fixture.detectChanges();

    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toContain('Engineering student');
    expect(fixture.nativeElement.querySelector('#vie-associative h2')?.textContent).toContain(
      'Associations'
    );
  });
});
