import Ember from 'ember';

export default Ember.Controller.extend({
  stages: ["Demo", "Evaluation", "Solutions Planning Call", "Quote", "Quote Review", "Won & Closed", "Lost & Closed"],
  actions: {
    /*
      create an opportunity
      if success, then transition to opportunity page
      if error, then transition back to the form
    */
    addOpportunity: function() {
      this.get('model').set('company', this.get('company')).set('stage', this.get('selectedStage')).save().then((opportunity) => {
        this.transitionToRoute('crm.companies.show.opportunities.show', opportunity);
      }, (error) => {
        console.log(error);
      });
    },

    selectStage: function(stage) {
      this.set('selectedStage', stage);
    }
  }
});
