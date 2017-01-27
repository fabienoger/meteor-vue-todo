import Tasks from '/imports/api/tasks/collection';

// State
const state = {
  tasks: []
};

// Mutations
const mutations = {
  SET_TASKS: (state, tasks) => {
    state.tasks = tasks;
  }
};

// Getters
const getters = {
  tasks: state => state.tasks
};

// Actions
const actions = {
  // Function who call createTask method
  createTask({state}, text) {
    return Meteor.call('addTask', text, (err, result) => {
      if (err) {
        return console.error("addTask", err);
      }
      // Update state from mutations
      mutations.SET_TASKS(state, Tasks.find({}).fetch());
    });
  },
  // Function who call removeTask method
  removeTask(_, id) {
    return Meteor.call('removeTask', id, (err, result) => {
      if (err) {
        return console.error("removeTask", err);
      }
      // Update state from mutations
      mutations.SET_TASKS(state, Tasks.find({}).fetch());
    });
  }
};

Meteor.subscribe("tasks", (err, tasks) => {
  mutations.SET_TASKS(state, Tasks.find({}).fetch());
});

export default {
  state,
  mutations,
  actions,
  getters,
  strict: true
}
