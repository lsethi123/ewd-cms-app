import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    cancel: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.set('sendingData', true);
      this.get('model').set('employee', this.get('selectedEmployee')).set('user', this.get('selectedUser')).save().then((task) => {
        this.set('sendingData', false);
        this.toggleProperty('isEditing');
      });
    },

    selectEmployee: function(person) {
      this.set('selectedEmployee', person);
    }
  }
});
