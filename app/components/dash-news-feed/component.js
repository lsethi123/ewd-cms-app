import Ember from 'ember';

export default Ember.Component.extend({
  tasks: null,
  todos: null,
  events: null,
  actions: {
    showTodo: function(todo) {
      this.transitionToRoute('todos.show', todo);
    },
    showTask: function(task) {
      this.transitionToRoute('tasks.show', task);
    },
    showEvent: function(event) {
      this.transitionToRoute('events.show', event);
    }
  }
});
