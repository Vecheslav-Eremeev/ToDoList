import { createStore, createLogger } from 'vuex'

export default createStore({
  plugins: [createLogger()],
  state: {
    todos: [
      { id: 1, text: 'Relax', done: true },
      { id: 2, text: 'Fun', done: false },
    ]
  },
  getters: {
    getTodos: state => state.todos.filter(todo => !todo.done),
    getDoneTodos: state => state.todos.filter(todo => todo.done),
    getTodoById: state => id => state.todos.find(todo => todo.id == id)
  },
  mutations: {
    addTodo(state, task) {
      state.todos.unshift(task);
    },
    delTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    },
    updateTodo(state, payload) {
      const todoIndex = state.todos.findIndex(todo => todo.id == payload.id)
      state.todos[todoIndex].text = payload.text
    },
  },
  actions: {
    addTodo({ commit }, text) {
      const todo = {
        id: Date.now(),
        text: text,
        done: false
      };
      commit('addTodo', todo);
    },
    delTodo({ commit }, id) {
      commit('delTodo', id);
    },
    updateTodo({ commit }, payload) {
      commit('updateTodo', payload);
    }
  }
})
