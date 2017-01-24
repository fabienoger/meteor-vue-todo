import Tasks from './collection.js';

Meteor.methods({
  addTask: (task) => {
    if (!task || !task.text) {
      throw new Meteor.Error("missing-param", "Missing 'task' param");
    }
    return Tasks.insert(task);
  }
});
