import Ember from 'ember';

export default Ember.Component.extend({
  events: null,
  todaysEvents: [],

  didReceiveAttrs: function() {
    this.get('events').forEach((event) => {
      let now = moment();
      let date = event.get('date');
      let start = moment(event.get('start'));
      let end = moment(event.get('end'));


      let startHour = start.hour();
      let startMins = start.minutes();

      let endHour = end.hour();
      let endMins = end.minutes();

      let difference = now.diff(date, 'days');
      if (difference === 0 || difference === -0) {
        this.get('todaysEvents').addObject(event);
      }

      if (startMins === 0) {
        startMins = '00';
      }

      if (endMins === 0) {
        endMins = '00';
      }

      let eventRange = startHour + ':' + startMins + ' - ' + endHour + ':' + endMins;

      event.set('eventRange', eventRange);

    });
  }

});
