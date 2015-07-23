import Ember from 'ember';

export default Ember.Controller.extend({
  roles: ["Buyer", "Recommender", "Tester"],

  actions: {
    /*
      create an employee
      if success, then transition to employee page
      if error, then transition back to the form
    */
    addEmployee: function() {
      this.get('model').set('company', this.get('company')).set('role', this.get('selectedRole')).save().then((employee) => {
        this.transitionToRoute('crm.companies.show.employees.show', employee);
      }, (error) => {
        console.log(error);
      });
    },

    selectRole: function(role) {
      this.set('selectedRole', role);
    }
  }
});
