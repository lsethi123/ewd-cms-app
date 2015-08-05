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
      this.set('sendingData', true);
      let user = this.get('model');
      if(this.get('selectedTeam')) {
        user.set('team', this.get('selectedTeam'));
      }
      user.save().then((user) => {
        this.set('sendingData', false);
        this.set('isEditing', false);
      }, (error) => {
        this.set('sendingData', false);
        this.set('isEditing', false);
      });
    }
  }
});
