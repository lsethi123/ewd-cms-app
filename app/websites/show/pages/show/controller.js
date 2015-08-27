import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(model) {
      this.transitionToRoute('websites.index');
      model.destroyRecord();
    }
  }
});
