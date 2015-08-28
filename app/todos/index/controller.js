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

    showTodo: function(todo) {
      this.transitionToRoute('todos.show', todo);
    }
  }
});
