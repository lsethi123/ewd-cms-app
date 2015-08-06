import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    cancel: function() {
      this.set('isEditing', false);
    },

    closeModal: function() {
      this.set('isEditing', false);
    },

    save: function() {
      this.set('sendingData', true);
      this.get('model').save().then((company) => {
        this.set('sendingData', false);
        this.toggleProperty('isEditing');
      });
    }
  }
});
