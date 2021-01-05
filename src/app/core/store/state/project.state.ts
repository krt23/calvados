import {NewProjects} from '../../../MOCK-DATA/mock-data';
import {ProjectInterface} from '../../models/project.model';

export interface ProjectState {
  projectList: ProjectInterface[];
  selectedProject: ProjectInterface;
}

export const initialProjectState: ProjectState = {
  projectList: NewProjects,
  selectedProject: null
};
