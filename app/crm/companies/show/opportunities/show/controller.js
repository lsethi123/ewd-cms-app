import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  stages: ["Demo", "Evaluation", "Solutions Planning Call", "Quote", "Quote Review", "Won & Closed", "Lost & Closed"],

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    cancel: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.set('sendingData', true);
      this.get('model').set('stage', this.get('selectedStage')).save().then((opportunity) => {
        this.set('sendingData', false);
        this.toggleProperty('isEditing');
      });
    },

    selectStage: function(stage) {
      this.set('selectedStage', stage);
    }
  }
});
