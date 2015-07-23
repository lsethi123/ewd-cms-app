import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  roles: ["Buyer", "Recommender", "Tester"],

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    cancel: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.get('model').set('role', this.get('selectedRole')).save().then((employee) => {
        this.toggleProperty('isEditing');
      });
    },

    selectRole: function(role) {
      this.set('selectedRole', role);
    }
  }
});
