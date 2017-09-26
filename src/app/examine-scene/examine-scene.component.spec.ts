import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineSceneComponent } from './examine-scene.component';

describe('ExamineSceneComponent', () => {
  let component: ExamineSceneComponent;
  let fixture: ComponentFixture<ExamineSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamineSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamineSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
