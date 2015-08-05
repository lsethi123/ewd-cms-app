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
      this.set('sendingData', true);
      this.get('model').set('company', this.get('company')).set('employee', this.get('selectedEmployee')).set('user', this.get('selectedUser')).save().then((task) => {
        this.set('sendingData', false);
        this.transitionToRoute('crm.companies.show.tasks.show', task);
      }, (error) => {
        this.set('sendingData', false);
        console.log(error);
      });
    },
    
    closeModal: function() {
      window.history.back();
    },

    selectEmployee: function(person) {
      this.set('selectedEmployee', person);
    },

    selectUser: function(person) {
      this.set('selectedUser', person);
    }
  }
});
