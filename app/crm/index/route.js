import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let opportunities = this.store.findAll('opportunity');
    let tasks = this.store.findAll('task');
    this.controllerFor('crm.index').set('opportunities', opportunities);
    this.controllerFor('crm.index').set('tasks', tasks);
    return this.store.findAll('company');
  }
});
