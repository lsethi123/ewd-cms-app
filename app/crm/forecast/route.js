import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.hash({
      opportunities: this.store.findAll('opportunity')
    });
  },

  setupController: function(controller, models) {
    let opportunities = models.opportunities;
    controller.set('opportunities', opportunities);
  }
});
