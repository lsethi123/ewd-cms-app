import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel: function() {
      window.history.back();
    }
  }
});
