import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addEvent: function() {
      this.transitionToRoute('events.new');
    },

    showUserCalendar: function(user) {
      this.transitionToRoute('events.user', user);
    }
  }
});
