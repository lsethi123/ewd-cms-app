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

    selectTeam: function(team) {
      this.set('selectedTeam', team);
    },

    save: function() {
      let file = document.getElementById('file-field').files[0];
      this.get('model').set('avatar', file).set('team', this.get('selectedTeam')).save().then((user) => {
        this.toggleProperty('isEditing');
      });
    }
  }
});
