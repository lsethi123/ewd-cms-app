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
      this.get('model').save().then((team) => {
        this.set('sendingData', false);
        this.toggleProperty('isEditing');
      });
    }
  }
});
