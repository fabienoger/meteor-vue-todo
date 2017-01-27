import Vuex from 'vuex';
import tasks from './modules/tasks.js';

export default new Vuex.Store({
  modules: {
    tasks
  }
});
