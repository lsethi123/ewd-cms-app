import Ember from 'ember';

export default Ember.Route.extend({

  willTransition: function() {
    this.controllerFor('login').set('error', null);
    this.controllerFor('login').set('isShowingError', false);
  }

});
