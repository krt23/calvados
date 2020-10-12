import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAndProjectsComponent } from './tasks-and-projects.component';

describe('TasksAndProjectsComponent', () => {
  let component: TasksAndProjectsComponent;
  let fixture: ComponentFixture<TasksAndProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksAndProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAndProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
