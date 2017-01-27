import { StoreModule } from 'meteor/akryum:vuex';
import tasks from './modules/tasks.js';

const root = new StoreModule();
root.addModule(tasks);

export const store = root.exportStore();
