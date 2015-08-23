import Ember from 'ember';

export default Ember.Route.extend({
  todaysEvents: [],

  model: function() {
    return new Ember.RSVP.hash({
      companies: this.store.findAll('company'),
      tasks: this.store.query('task', { user_id: this.get('session.secure.id') } ),
      opportunities: this.store.findAll('opportunity'),
      events: this.store.findAll('event')
    });
  },

  setupController: function(controller, models) {
    let companies = models.companies;
    let tasks = models.tasks;
    let opportunities = models.opportunities;
    let events = models.events;

    controller.set('model', companies);
    controller.set('tasks', tasks);
    controller.set('opportunities', opportunities);
    events.forEach((event) => {
      let now = moment();
      let date = event.get('date');
      let difference = now.diff(date, 'days');
      if (difference === 0 || difference === -0) {
        this.get('todaysEvents').addObject(event);
      }
    });

    controller.set('todaysEvents', this.get('todaysEvents'));
  },

  actions: {
    viewCalendar: function() {
      this.transitionTo('events.index');
    }
  }
});
