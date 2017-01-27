// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
import Vuex from 'vuex';
import Sortable from 'sortablejs';

// Components
import App from '/imports/ui/components/App.vue';

Vue.directive('sortable', {
  inserted: function (el, binding) {
    new Sortable(el, binding.value || {})
  }
});

Vue.use(Vuex);

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});
