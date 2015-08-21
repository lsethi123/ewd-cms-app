import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('post', { tag_ids: params.tag_id } );
  }
});
