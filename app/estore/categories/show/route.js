import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('product', { category_ids: params.category_id } );
  }
});
