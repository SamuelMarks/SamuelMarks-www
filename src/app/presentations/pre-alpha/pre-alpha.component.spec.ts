import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreAlphaComponent } from './pre-alpha.component';

describe('PreAlpha_1_Component', () => {
  let component: PreAlphaComponent;
  let fixture: ComponentFixture<PreAlphaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PreAlphaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
