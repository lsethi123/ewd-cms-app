import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  imageUrl: function() {
    return "http://localhost:3000" + this.get('model.image');
  }.property('model'),

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
