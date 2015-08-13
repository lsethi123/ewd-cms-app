import Ember from 'ember';

export default Ember.Controller.extend({
  occurences: Ember.A(),

  actions: {
    add: function(event) {
      this.store.createRecord('event', {
        title: event.get('title'),
        startsAt: event.get('startsAt'),
        endsAt: event.get('endsAt')
      }).save().then((event) => {
        this.get('flashMessages').success('Event was created.');
      });
    },

    update: function(event, properties) {
      event.setProperties(properties).save();
    },

    delete: function(event) {
      event.destroyRecord();
      return false;
    }
  }
});
