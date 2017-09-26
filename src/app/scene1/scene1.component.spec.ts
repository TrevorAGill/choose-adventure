import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene1Component } from './scene1.component';

describe('Scene1Component', () => {
  let component: Scene1Component;
  let fixture: ComponentFixture<Scene1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
