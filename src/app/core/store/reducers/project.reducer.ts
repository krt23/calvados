import {initialProjectState} from '../state/project.state';
import {ADD_PROJECT, ProjectsActions} from '../actions/project.actions';


export function projectReducer(state = initialProjectState, action: ProjectsActions) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projectList: [...state.projectList, action.payload]
      };
    default:
      return state;
  }

}
