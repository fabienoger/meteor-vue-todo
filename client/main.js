// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
import Vuex from 'vuex';
import Sortable from 'sortablejs';
import router from '/imports/router';

// Components
import AppLayout from '/imports/ui/components/AppLayout.vue';

Vue.directive('sortable', {
  inserted: function (el, binding) {
    new Sortable(el, binding.value || {})
  }
});

Meteor.startup(() => {
  new Vue({
    router: router.start(),
    render: h => h(AppLayout),
  }).$mount('app');
});
