import { TestBed } from '@angular/core/testing';
import { BaseComponent } from './base.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BaseComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'LearnExchange'`, () => {
    const fixture = TestBed.createComponent(BaseComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LearnExchange');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('LearnExchange app is running!');
  });
});
