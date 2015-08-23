import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return new Ember.RSVP.hash({
      companies: this.store.findAll('company'),
      tasks: this.store.query('task', { user_id: this.get('session.secure.id') } ),
      opportunities: this.store.findAll('opportunity')
    });
  },

  setupController: function(controller, models) {
    let companies = models.companies;

    controller.set('companies', companies);
  }
});
