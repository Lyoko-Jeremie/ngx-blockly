import {waitForAsync, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NgxBlocklyModule} from 'ngx-blockly';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgxBlocklyModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should expose the blockly configuration', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.config).toBeTruthy();
    expect(app.config.toolbox).toBeTruthy();
  });

  it('should render the blockly workspace', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('ngx-blockly')).toBeTruthy();
    expect(el.querySelector('svg')).toBeTruthy();
  });
});