import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let tags = this.store.findAll('tag');
    this.controllerFor('blog.posts.new').set('tags', tags);
    return this.store.createRecord('post');
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
