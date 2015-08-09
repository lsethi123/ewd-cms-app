import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeBoard: function(todo, ops) {
      todo.set('board', ops.target.attrs.board.value).save().then((todo) => {
        console.log("todo moved to board " + ops.target.attrs.board.value.id);
      })
    },

    deleteTodo: function(todo) {
      todo.destroyRecord();
      return false;
    },

    deleteBoard: function(board) {
      board.destroyRecord();
      return false;
    },

    createTodo: function(board) {
      console.log('todo created');
    },

    addTodo: function(board) {
      this.controllerFor('todos.new').set('board', board);
      this.transitionToRoute('todos.new');
    },

    showTodo: function(todo) {
      this.transitionToRoute('todos.show', todo);
    }
  }
});
