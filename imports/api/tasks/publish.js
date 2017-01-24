import Tasks from './collection.js'

Meteor.publish('tasks', () => {
  return Tasks.find();
});
