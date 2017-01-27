import Tasks from './collection.js';
import { NonEmptyString } from '/imports/utils/match';


Meteor.methods({
  // Insert new Task in Mongo
  addTask: (text) => {
    check(text, NonEmptyString);
    return Tasks.insert({
      text,
      createdAt: new Date()
    });
  },
  // Remove Task from id
  removeTask: (id) => {
    check(id, NonEmptyString);
    return Tasks.remove({_id: id});
  }
});
