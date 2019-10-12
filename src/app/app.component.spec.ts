import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './shared/components/topnavbar/topnavbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TopnavbarComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'news_aggregator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('news_aggregator');
  });
});
