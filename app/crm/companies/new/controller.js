import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /*
      create a company
      if success, then transition to company page
      if error, then transition back to the form
    */
    add: function() {
      this.set('sendingData', true);
      this.get('model').save().then((company) => {
        this.set('sendingData', false);
        this.transitionToRoute('crm.companies.show', company);
      }, (error) => {
        this.set('sendingData', false);
        console.log(error);
      });
    },

    closeModal: function() {
      window.history.back();
    }
  }
});
