import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let page = this.store.findRecord('page', params.page_id);
    return page;
  }
});
