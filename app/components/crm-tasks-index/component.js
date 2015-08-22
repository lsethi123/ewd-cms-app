import Ember from 'ember';

export default Ember.Component.extend({
  tasks: null,
  filteredTasks: [],

  didReceiveAttrs: function() {
    this.get('tasks').forEach((task) => {
      let now = moment();
      let dueDate = task.get('dueDate');
      let taskDue = now.to(dueDate);
      let difference = now.diff(dueDate, 'days');
      if (difference === 0 || difference === -0) {
        this.get('filteredTasks').addObject(task);
      }
      task.set('isSame', 'this is todays task');
    });
  }

});
