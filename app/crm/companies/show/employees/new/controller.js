import Ember from 'ember';

export default Ember.Controller.extend({
  roles: ["Buyer", "Recommender", "Tester"],

  actions: {
    /*
      create an employee
      if success, then transition to employee page
      if error, then transition back to the form
    */
    add: function() {
      this.set('sendingData', true);
      this.get('model').set('company', this.get('company')).set('role', this.get('selectedRole')).save().then((employee) => {
        this.set('sendingData', false);
        this.transitionToRoute('crm.companies.show.employees.index');
      }, (error) => {
        this.set('sendingData', false);
        console.log(error);
      });
    },

    cancel: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },

    selectRole: function(role) {
      this.set('selectedRole', role);
    },

    closeModal: function() {
      this.get('model').destroyRecord();
      window.history.back();
    }
  }
});
