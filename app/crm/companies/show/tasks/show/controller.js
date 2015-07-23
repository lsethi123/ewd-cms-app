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
      this.get('model').set('employee', this.get('selectedEmployee')).save().then((task) => {
        this.toggleProperty('isEditing');
      });
    },

    selectEmployee: function(person) {
      this.set('selectedEmployee', person);
    }
  }
});
