import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChart1Component } from './test-chart1.component';

describe('TestChart1Component', () => {
  let component: TestChart1Component;
  let fixture: ComponentFixture<TestChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
