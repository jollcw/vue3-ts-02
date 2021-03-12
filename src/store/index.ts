// export type User = {
//   id: number;
//   name: string;
//   age: number;
//   gender: string;
//   birthDate: Date;
//   job: string;
//   image: string;
// };

import { createStore } from 'vuex';
import User from '@/Models/user';
import { UserAdd } from '@/Models/userAdd';
import axios from 'axios';

export default createStore({
  // * variables a utilizar con su tipado
  state: {
    loading: false as boolean,
    user: {} as User,
    users: [] as User[],
  },
  // * computar estados, ej filtrar usuarios
  getters: {
    getUsers(state) {
      return state.users;
    },

    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // }
  },
  // * modificar valores de los states
  mutations: {
    insertUser(state, user: User) {
      state.users.push(user);
    },
    getUsers(state, users: User[]) {
      state.users = users;
    },
    getUser(state, user: User) {
      state.user = user;
    },
  },
  // * las acciones cometen mutaciones
  actions: {
    async insertUser({ commit }, payload) {
      const url: string = payload.url;
      const user: User = payload.userAdd;
      console.log('payload.url', payload.url);
      console.log('payload.user', payload.userAdd);
      console.log('user', user);
      const result = await axios.post(url, user);
      console.log('result', result);
      commit('insertUser', user);
    },
    async selectUser({ commit }, url: string) {
      const result = await axios.get(url);
      // const users = await result.data;
      // commit('setUsers', users);
      commit('getUsers', result.data);
    },

    deleteUser({ commit }, user: User) {},

    async updateUser({ commit }, payload) {
      const url: string = payload.url;
      const user: User = payload.userUpdated;
      // console.log('payload.url', payload.url);
      // console.log('payload.user', payload.userUpdated);
      // console.log('user', user);
      const result = await axios.put(url, user);
      commit('getUsers', result.data);
    },
    filterUserId({ commit, state }, id) {
      console.log(id);
      const user = state.users.filter(user => user.id == id);
      console.log(user);
      commit('getUser', user[0]);
    },
  },
  modules: {},
});
