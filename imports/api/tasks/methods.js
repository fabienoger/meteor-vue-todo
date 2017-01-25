import Tasks from './collection.js';

Meteor.methods({
  addTask: (task) => {
    if (!task || !task.text) {
      throw new Meteor.Error("missing-param", "Missing 'task' param");
    }
    return Tasks.insert(task);
  },
  removeTask: (id) => {
    if (!id) {
      throw new Meteor.Error("missing-param", "Missing 'id' param");
    }
    return Tasks.remove({_id: id});
  }
});
