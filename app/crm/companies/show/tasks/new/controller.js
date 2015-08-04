import Ember from 'ember';

export default Ember.Controller.extend({
  employee: null,

  actions: {
    /*
      create a task
      if success, then transition to task page
      if error, then transition back to the form
    */
    add: function() {
      this.get('model').set('company', this.get('company')).set('employee', this.get('selectedEmployee')).set('user', this.get('selectedUser')).save().then((task) => {
        this.transitionToRoute('crm.companies.show.tasks.show', task);
      }, (error) => {
        console.log(error);
      });
    },

    selectEmployee: function(person) {
      this.set('selectedEmployee', person);
    },

    selectUser: function(person) {
      this.set('selectedUser', person);
    }
  }
});
