import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(employee) {
      employee.destroyRecord();
      return false;
    },

    edit: function(employee) {
      this.transitionToRoute('crm.companies.show.employees.show', employee);
      this.controllerFor('crm.companies.show.employees.show').set('isEditing', true);
    },

    sendEmail: function(employee) {
      this.transitionToRoute('crm.companies.show.employees.email', employee);
    }
  }
});
