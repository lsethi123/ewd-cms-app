import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTodo: function(board) {
      this.controllerFor('todos.new').set('board', board);
      this.transitionToRoute('todos.new');
    }
  }
});
