import Ember from 'ember';

export default Ember.Controller.extend({
  occurences: Ember.A(),

  actions: {
    add: function(event) {
      this.get('occurences').pushObject(Ember.Object.extend({
        title: event.get('title'),
        startsAt: event.get('startsAt'),
        endsAt: event.get('endsAt')
      }));
    },

    update: function(event, properties) {
      event.setProperties(properties);
    },

    delete: function(event) {
      this.get('occurences').removeObject(event);
    }
  }
});
