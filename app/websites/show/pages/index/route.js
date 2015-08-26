import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let website = this.modelFor('websites.show');
    return this.store.query('page', { website_id: website.get('id') } );
  }
});
