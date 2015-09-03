import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('event', { user_id: params.user_id } );
  }
});
