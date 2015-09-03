import Ember from 'ember';

export default Ember.Controller.extend({
  occurrences: Ember.A(),

  actions: {
    add: function() {
      let self = this;
      this.set('isShowingTitleInput', false);
      let newEvent = this.store.createRecord('event', {
        title: this.get('eventTitle'),
        startsAt: this.get('eventStarts'),
        endsAt: this.get('eventEnds'),
        user: this.get('currentUser')
      });

      newEvent.save().then((newEvent) => {
        this.set('eventTitle', null);
        this.set('eventStarts', null);
        this.set('eventEnds', null);
      });
    },

    closeModal: function() {
      this.set('eventTitle', null);
      this.set('isShowingTitleInput', false);
    },

    calendarAddOccurrence: function(occurrence) {
      this.set('isShowingTitleInput', true);
      this.set('eventStarts', occurrence.get('startsAt'));
      this.set('eventEnds', occurrence.get('endsAt'));
    },

    calendarUpdateOccurrence: function(occurrence, properties) {
      occurrence.setProperties(properties);
    },

    calendarRemoveOccurrence: function(occurrence) {
      occurrence.destroyRecord();
    }
  }
});
