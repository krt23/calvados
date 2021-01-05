import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Store} from '@ngrx/store';
import {ProjectInterface} from '../../core/models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})

export class NewProjectComponent implements OnInit, OnDestroy {
  public project: ProjectInterface;
  public projectList: Observable<{projectList: ProjectInterface[]}>;
  private unsubscribe$: Subject<void> = new Subject<void>();
  public projectAddForm: FormGroup;
  public hideNotSelected = false;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private store: Store<{ projects: { projectList: ProjectInterface[]} }>
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.projectList = this.store.select('projects');
  }

  private initForm(): void {
    this.projectAddForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dateStart: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }

  public onSubmit(): void {
    console.log('Save');
 //   const newEmployee = this.projectAddForm.value;
 //   this.store.dispatch(new EmployeeActions.AddEmployee(newEmployee));
    this.location.back();
  }

  public get name() {return this.projectAddForm.get('name'); }
  public get dateStart() {return this.projectAddForm.get('dateStart'); }
  public get status() {return this.projectAddForm.get('status'); }
  public get link() {return this.projectAddForm.get('link'); }
  public get description() {return this.projectAddForm.get('description'); }


  insideChecked(section) {
    let answer = false;
    section.permissions.some(permission => {
      if (permission.checked) {
        answer = true;
        return;
      }
    });
    return answer;
  }
  showSection(section) {
    return !this.hideNotSelected ||
      (this.hideNotSelected && section.checked) ||
      (this.hideNotSelected && this.insideChecked(section));
  }
  checkSection() {}
  togglePermission() {}

}
