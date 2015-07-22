import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /*
      create a company
      if success, then transition to company page
      if error, then transition back to the form
    */
    addCompany: function() {
      this.get('model').save().then((company) => {
        this.transitionToRoute('crm.companies.show', company);
      }, (error) => {
        console.log(error);
      });
    }
  }
});
