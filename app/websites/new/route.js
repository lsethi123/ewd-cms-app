import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let user = this.store.findRecord('user', this.get('session.secure.id'));
    return this.store.createRecord('website', {
      user: user
    });
  }
});
