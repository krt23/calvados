import {Action} from '@ngrx/store';
import {ProjectInterface} from '../../models/project.model';


export const GET_PROJECT = '[Project] Get Project';
export const GET_PROJECTS = '[Project] Get Projects';
export const ADD_PROJECT = '[Project] Add Project';
export const UPDATE_PROJECT = '[Project] Update Project';
export const DELETE_PROJECT = '[Project] Delete Project';
export const FETCH_PROJECT = '[Project] Fetch Project';

export class GetProject implements Action {
  readonly type = GET_PROJECT;
  constructor(public payload: number) {}
}

export class GetProjects implements Action {
  readonly type = GET_PROJECTS;
  constructor(public payload: ProjectInterface[]) {}
}

export class AddProject implements Action {
  readonly type = ADD_PROJECT;
  constructor(public payload: ProjectInterface) {}
}

export class UpdateProject implements Action {
  readonly type = UPDATE_PROJECT;
  constructor(public payload: { index: number, project: ProjectInterface }) {}
}

export class DeleteProject implements Action {
  readonly type = DELETE_PROJECT;
  constructor(public payload: number) {}
}

export class FetchEmployee implements Action {
  readonly type = FETCH_PROJECT;
}

export type ProjectsActions = GetProject | GetProjects | AddProject | UpdateProject | DeleteProject;
