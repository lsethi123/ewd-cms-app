import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showTableLayout: function() {
      this.controllerFor('blog.index').set('isShowingDataLayout', false);
      this.controllerFor('blog.index').set('isShowingCardLayout', false);
      this.controllerFor('blog.index').set('isShowingTableLayout', true);
    },

    showDataLayout: function() {
      this.controllerFor('blog.index').set('isShowingTableLayout', false);
      this.controllerFor('blog.index').set('isShowingCardLayout', false);
      this.controllerFor('blog.index').set('isShowingDataLayout', true);
    },

    showCardLayout: function() {
      this.controllerFor('blog.index').set('isShowingTableLayout', false);
      this.controllerFor('blog.index').set('isShowingDataLayout', false);
      this.controllerFor('blog.index').set('isShowingCardLayout', true);
    }
  }
});
