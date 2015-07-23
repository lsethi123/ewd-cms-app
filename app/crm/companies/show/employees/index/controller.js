import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteEmployee: function(employee) {
      employee.destroyRecord();
      return false;
    }
  }
});
