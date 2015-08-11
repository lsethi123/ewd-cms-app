import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let page = this.modelFor('pages.show');
    this.controllerFor('pages.show.slider.edit').set('page', page);
    return this.store.findRecord('slider', params.slider_id);
  }
});
