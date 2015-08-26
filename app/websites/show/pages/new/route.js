import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let website = this.modelFor('websites.show');
    return this.store.createRecord('page', {
      website: website
    });
  }
});
