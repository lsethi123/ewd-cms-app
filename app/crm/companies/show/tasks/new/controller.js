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
        this.transitionToRoute('crm.companies.show.tasks.index');
        this.get('flashMessages').success('Task Successfully Created!');
      }, (error) => {
        this.set('sendingData', false);
        console.log(error);
      });
    },

    cancel: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },

    closeModal: function() {
      this.get('model').destroyRecord();
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
