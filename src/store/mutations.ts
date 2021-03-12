import { MutationTree } from 'vuex';
import { State, User } from './states';

export enum MutationsType {
  CreateUser = 'CREATE_USER',
  SetUser = 'SET_USER',
  DeleteUser = 'DELETE_USER',
  SetLoading = 'SET_LOADING',
}

export type Mutations = {
  [MutationsType.CreateUser](state: State, user: User): void;
};
