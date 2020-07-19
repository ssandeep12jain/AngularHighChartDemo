import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttChart2Component } from './gantt-chart2.component';

describe('GanttChart2Component', () => {
  let component: GanttChart2Component;
  let fixture: ComponentFixture<GanttChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
