import {AppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {ProjectState} from '../state/project.state';

const selectProjects = (state: AppState) => state.projects;

export const selectProjectList = createSelector(
  selectProjects,
  (state: ProjectState) => state.projectList
);

export const selectSelectedProject = createSelector(
  selectProjects,
  (state: ProjectState) => state.selectedProject
);
