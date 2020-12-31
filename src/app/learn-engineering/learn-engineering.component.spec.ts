import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LearnEngineeringComponent } from './learn-engineering.component';

describe('LearnEngineeringComponent', () => {
  let component: LearnEngineeringComponent;
  let fixture: ComponentFixture<LearnEngineeringComponent>;

  beforeEach(waitForAsync(() => {
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
