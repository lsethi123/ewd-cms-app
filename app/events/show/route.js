import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('event', params.event_id);
  },

  setupController: function(controller, model) {

      let now = moment();
      let date = model.get('date');
      let start = moment(model.get('start'));
      let end = moment(model.get('end'));


      let startHour = start.hour();
      let startMins = start.minutes();

      let endHour = end.hour();
      let endMins = end.minutes();

      if (startMins === 0) {
        startMins = '00';
      }

      if (endMins === 0) {
        endMins = '00';
      }

      let eventRange = startHour + ':' + startMins + ' - ' + endHour + ':' + endMins;

      model.set('eventRange', eventRange);
      controller.set('model', model);

  }
});
