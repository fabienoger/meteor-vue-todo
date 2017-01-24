// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';

// Main app
import App from '/imports/ui/components/App.vue';

// Data
import Tasks from '/imports/api/tasks/collection';

Meteor.startup(() => {
  new Vue({
    el: 'body',
    replace: true,
    components: {
      App
    }
  });
});
