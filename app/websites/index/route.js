import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let currentUser = this.get('session.secure.id');
    return this.store.query('website', { user_id: currentUser } );
  },

  setupController: function(controller, model) {
    let websites = model;
    controller.set('websites', model);
  }
});
