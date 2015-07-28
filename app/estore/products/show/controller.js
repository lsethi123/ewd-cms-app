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
      this.get('model').save().then((product) => {
        this.toggleProperty('isEditing');
      });
    }
  }
});
