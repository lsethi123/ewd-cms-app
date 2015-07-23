import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /*
      create an opportunity
      if success, then transition to opportunity page
      if error, then transition back to the form
    */
    addOpportunity: function() {
      this.get('model').set('company', this.get('company')).save().then((opportunity) => {
        this.transitionToRoute('crm.companies.show.opportunities.show', opportunity);
      }, (error) => {
        console.log(error);
      });
    }
  }
});
