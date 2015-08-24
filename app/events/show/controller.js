import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    cancelEdit: function() {
      this.set('isEditing', false);
    },

    cancel: function() {
      window.history.back();
    }
  }
});
