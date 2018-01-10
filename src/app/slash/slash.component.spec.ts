import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlashComponent } from './slash.component';

describe('SlashComponent', () => {
  let component: SlashComponent;
  let fixture: ComponentFixture<SlashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
