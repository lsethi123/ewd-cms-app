import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showTableLayout: function() {
      this.controllerFor('estore.index').set('isShowingDataLayout', false);
      this.controllerFor('estore.index').set('isShowingCardLayout', false);
      this.controllerFor('estore.index').set('isShowingTableLayout', true);
    },

    showDataLayout: function() {
      this.controllerFor('estore.index').set('isShowingTableLayout', false);
      this.controllerFor('estore.index').set('isShowingCardLayout', false);
      this.controllerFor('estore.index').set('isShowingDataLayout', true);
    },

    showCardLayout: function() {
      this.controllerFor('estore.index').set('isShowingTableLayout', false);
      this.controllerFor('estore.index').set('isShowingDataLayout', false);
      this.controllerFor('estore.index').set('isShowingCardLayout', true);
    }
  }
});
