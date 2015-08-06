import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(task) {
      task.destroyRecord();
      return false;
    },

    edit: function(task) {
      this.transitionToRoute('crm.companies.show.tasks.show', task);
      this.controllerFor('crm.companies.show.tasks.show').set('isEditing', true);
    }
  }
});
