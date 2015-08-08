import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let page = this.controllerFor('pages.show.slider').get('page');
      this.get('model').set('page', page).save().then((slider) => {
        this.transitionToRoute('pages.index');
      });
    }
  }
});
