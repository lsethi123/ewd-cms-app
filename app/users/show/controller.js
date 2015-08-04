import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    cancel: function() {
      this.toggleProperty('isEditing');
    },

    selectTeam: function(team) {
      this.set('selectedTeam', team);
    },

    save: function() {
      let file = document.getElementById('file-field').files[0];
      let user = this.get('model');
        user.set('avatar', file);
      if(this.get('selectedTeam')) {
        user.set('team', this.get('selectedTeam'));
      }
      user.save().then((user) => {
        this.set('isEditing', false);
      }, (error) => {
        this.set('isEditing', false);
      });
    }
  }
});
