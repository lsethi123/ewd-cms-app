import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      tags: this.store.findAll('tag')
    });
  },

  setupController: function(controller, models) {
    let posts = models.posts;
    let tags = models.tags;

    controller.set('posts', posts);
    controller.set('tags', tags);
  }
});
