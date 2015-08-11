import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(page) {
      page.destroyRecord();
      return false;
    }
  }
});
