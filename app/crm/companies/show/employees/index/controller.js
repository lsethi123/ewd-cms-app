import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteEmployee: function(employee) {
      employee.destroyRecord();
      return false;
    },

    editEmployee: function(employee) {
      this.transitionToRoute('crm.companies.show.employees.show', employee);
      this.controllerFor('crm.companies.show.employees.show').set('isEditing', true);
    }
  }
});
