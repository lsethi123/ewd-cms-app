import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.hash({
      companies: this.store.findAll('company'),
      tasks: this.store.query('task', { user_id: this.get('session.secure.id') } ),
      opportunities: this.store.findAll('opportunity')
    });
  },

  setupController: function(controller, models) {
    let companies = models.companies;
    let tasks = models.tasks;
    let opportunities = models.opportunities;

    controller.set('model', companies);
    controller.set('tasks', tasks);
    controller.set('opportunities', opportunities);
  }
});
