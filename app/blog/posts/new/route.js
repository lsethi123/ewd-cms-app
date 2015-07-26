import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let tags = this.store.findAll('tag');
    this.controllerFor('blog.posts.new').set('tags', tags);
    return this.store.createRecord('post');
  }
});
