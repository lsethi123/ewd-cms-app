import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.hash({
      todo: this.store.createRecord('todo'),
      boards: this.store.findAll('board')
    });
  },

  setupController: function(controller, models) {
    let todo = models.todo;
    let boards = models.boards;

    controller.set('model', todo);
    controller.set('boards', boards);
  }
});
