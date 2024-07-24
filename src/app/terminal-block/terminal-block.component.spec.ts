import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalBlockComponent } from './terminal-block.component';

describe('TerminalBlockComponent', () => {
  let component: TerminalBlockComponent;
  let fixture: ComponentFixture<TerminalBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
