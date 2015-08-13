import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.hash({
      tasks: this.store.query('task', { user_id: this.get('session.secure.id') } ),
      todos: this.store.query('todo', { user_id: this.get('session.secure.id' ) } ),
      opportunities: this.store.findAll('opportunity')
    });
  },

  setupController: function(controller, models) {
    let opportunities = models.opportunities;
    let tasks = models.tasks;
    let todos = models.todos;

    controller.set('opportunities', opportunities);
    controller.set('tasks', tasks);
    controller.set('todos', todos);
  }
});
