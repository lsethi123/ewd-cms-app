import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let page = this.modelFor('pages.show');
    this.controllerFor('pages.show.slider.new').set('page', page);
    return this.store.createRecord('slider');
  }
});
