import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAttendantComponent } from './help-attendant.component';

describe('HelpAttendantComponent', () => {
  let component: HelpAttendantComponent;
  let fixture: ComponentFixture<HelpAttendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpAttendantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
