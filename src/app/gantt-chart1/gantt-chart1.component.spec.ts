import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttChart1Component } from './gantt-chart1.component';

describe('GanttChart1Component', () => {
  let component: GanttChart1Component;
  let fixture: ComponentFixture<GanttChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
