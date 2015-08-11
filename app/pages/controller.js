import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showFlash: function() {
      this.get('flashMessages').warning('Successfully created the page', {
        sticky: true
      });
      this.get('flashMessages').info('Successfully created the page', {
        sticky: true
      });
      this.get('flashMessages').success('Successfully created the page', {
        sticky: true
      });
      this.get('flashMessages').danger('Successfully created the page', {
        sticky: true
      });
    }
  }
});
