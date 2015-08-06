import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  roles: ["Buyer", "Recommender", "Tester"],

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    closeModal: function() {
      this.set('isEditing', false);
    },

    cancel: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.set('sendingData', true);
      this.get('model').set('role', this.get('selectedRole')).save().then((employee) => {
        this.set('sendingData', false);
        this.toggleProperty('isEditing');
        this.transitionToRoute('crm.companies.show.employees.index');
      });
    },

    selectRole: function(role) {
      this.set('selectedRole', role);
    }
  }
});
