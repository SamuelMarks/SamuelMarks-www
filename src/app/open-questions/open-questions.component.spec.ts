import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenQuestionsComponent } from './open-questions.component';

describe('OpenQuestionsComponent', () => {
  let component: OpenQuestionsComponent;
  let fixture: ComponentFixture<OpenQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenQuestionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
