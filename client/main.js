// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
//import router from '/imports/router';

// Main app
//import AppLayout from '/imports/ui/components/AppLayout.vue';
import App from '/imports/ui/components/App.vue';

Meteor.startup(() => {
  new Vue({
    el: 'body',
    replace: true,
    components: {
      App
    }
  });
  /*
  new Vue({
    router: router.start(),
    render: h => h(AppLayout)
  }).$mount('app');
  */
});
