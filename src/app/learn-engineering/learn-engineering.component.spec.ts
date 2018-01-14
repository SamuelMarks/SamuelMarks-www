import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnEngineeringComponent } from './learn-engineering.component';

describe('LearnEngineeringComponent', () => {
  let component: LearnEngineeringComponent;
  let fixture: ComponentFixture<LearnEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearnEngineeringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
