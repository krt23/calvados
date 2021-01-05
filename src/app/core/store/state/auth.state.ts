import {UsersInterface} from '../../models/users.model';
import {Users} from '../../../MOCK-DATA/mock-data';

export interface UserState {
  users: UsersInterface[];
}

export const initialUserState: UserState = {
  users: Users
};
