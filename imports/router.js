// Import the router
import {Router, nativeScrollBehavior} from 'meteor/akryum:vue-router2';

// Create router instance
const router = new Router({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
});

// Components
import App from '/imports/ui/components/App.vue';
import NotFound from '/imports/ui/components/NotFound.vue';
import TasksList from '/imports/ui/components/tasks/TasksList.vue';

Router.configure(router => {
  router.addRoutes([
    {
      name: 'home',
      path: '/',
      component: App
    },
    {
      name: 'tasks',
      path: '/tasks',
      component: TasksList
    },
    {
      name: 'not-found',
      path: '*',
      component: NotFound
    }
  ]);
}, -1);

export default router;
