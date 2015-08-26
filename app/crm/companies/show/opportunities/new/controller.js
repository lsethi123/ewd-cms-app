import Ember from 'ember';

export default Ember.Controller.extend({
  stages: ["Demo", "Evaluation", "Solutions Planning Call", "Quote", "Quote Review", "Won & Closed", "Lost & Closed"],
  actions: {
    /*
      create an opportunity
      if success, then transition to opportunity page
      if error, then transition back to the form
    */
    add: function() {
      this.set('sendingData', true);
      this.get('model').set('company', this.get('company')).set('stage', this.get('selectedStage')).save().then((opportunity) => {
        this.set('sendingData', false);
        this.transitionToRoute('crm.companies.show.opportunities.index');
        this.get('flashMessages').success('Opportunity Successfully Created!');
      }, (error) => {
        this.set('sendingData', false);
        console.log(error);
      });
    },

    closeModal: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },

    cancel: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },

    selectStage: function(stage) {
      this.set('selectedStage', stage);
    }
  }
});
