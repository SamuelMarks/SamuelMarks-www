import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlatformPickerComponent } from './platform-picker.component';

describe('PlatformPickerComponent', () => {
  let component: PlatformPickerComponent;
  let fixture: ComponentFixture<PlatformPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformPickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
