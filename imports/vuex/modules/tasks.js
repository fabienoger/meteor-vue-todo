import { StoreSubModule } from 'meteor/akryum:vuex';
import Tasks from '/imports/api/tasks/collection';

const subModule = new StoreSubModule('tasks');

subModule.addActions({
  // Function who call createTask method
  createTask({state}, text) {
    return this.callMethod('addTask', text, (err, result) => {
      if (err) {
        return console.error("addTask", err);
      }
    });
  },
  // Function who call removeTask method
  removeTask(_, id) {
    return this.callMethod('removeTask', id, (err, result) => {
      if (err) {
        return console.error("removeTask", err);
      }
    });
  }
});

// Add trackers to the store module
subModule.addTrackers({
  // Name of the tracker
  tasks: () => {
    let sub;
    return {
      // Initialize the meteor data
      init: (data) => {
        data.tasks = []
      },
      // When the tracker is being used
      activate: () => {
        // Subscribe to the publication
        sub = Meteor.subscribe("tasks");
      },
      // When the tracker is no longer used
      deactivate: () => {
        // Stop the subscription
        sub.stop();
      },
      subscribe: {
        tasks: []
      },
      // Update the meteor data
      // Data is relative to the module
      update: (data) => {
        const tasks = Tasks.find({}).fetch();
        // Update the module meteor data
        data.tasks = Object.freeze(tasks);
      },
      // Getters
      getters: {
        getTasks: data => data.tasks
      },
      isActivated: false
    }
  }
});

export default subModule;
