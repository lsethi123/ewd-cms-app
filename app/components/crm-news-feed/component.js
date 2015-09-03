import Ember from 'ember';

export default Ember.Component.extend({
  tasks: null,
  opportunities: null,
  filteredTasks: [],
  filteredOpps: [],

  didReceiveAttrs: function() {
    this.get('tasks').forEach((task) => {
      let now = moment();
      let dueDate = task.get('dueDate');
      let taskDue = now.to(dueDate);
      let difference = now.diff(dueDate, 'days');
      if (difference >= -7 && difference <= 0) {
        this.get('filteredTasks').addObject(task);
      }
      task.set('taskDue', taskDue);
    });
    /*
    this.get('opportunities').forEach((opportunity) => {
      let now = moment();
      let estClose = opportunity.get('estimatedClose');
      let oppDue = now.to(estClose);
      let difference = now.diff(estClose, 'days');
      if (difference >= -7 && difference <= 0) {
        this.get('filteredOpps').addObject(opportunity);
      }
      opportunity.set('oppDue', oppDue);
    });
    */
  }
});
