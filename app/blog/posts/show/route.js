import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('post', params.post_id);
  },

  afterModel: function() {
    return this.store.findAll('tag');
  },

  setupController: function(controller, model) {
    controller.setProperties({
      model: model,
      tags: this.store.peekAll('tag')
    });
  }
});
