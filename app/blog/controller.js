import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showTableLayout: function() {
      this.controllerFor('blog.index').set('isShowingDataLayout', false);
      this.controllerFor('blog.index').set('isShowingCardLayout', false);
      this.controllerFor('blog.index').set('isShowingTableLayout', true);
      this.controllerFor('blog.tags.show').set('isShowingDataLayout', false);
      this.controllerFor('blog.tags.show').set('isShowingCardLayout', false);
      this.controllerFor('blog.tags.show').set('isShowingTableLayout', true);
    },

    showDataLayout: function() {
      this.controllerFor('blog.index').set('isShowingTableLayout', false);
      this.controllerFor('blog.index').set('isShowingCardLayout', false);
      this.controllerFor('blog.index').set('isShowingDataLayout', true);
      this.controllerFor('blog.tags.show').set('isShowingTableLayout', false);
      this.controllerFor('blog.tags.show').set('isShowingCardLayout', false);
      this.controllerFor('blog.tags.show').set('isShowingDataLayout', true);
    },

    showCardLayout: function() {
      this.controllerFor('blog.index').set('isShowingTableLayout', false);
      this.controllerFor('blog.index').set('isShowingDataLayout', false);
      this.controllerFor('blog.index').set('isShowingCardLayout', true);
      this.controllerFor('blog.tags.show').set('isShowingTableLayout', false);
      this.controllerFor('blog.tags.show').set('isShowingDataLayout', false);
      this.controllerFor('blog.tags.show').set('isShowingCardLayout', true);
    }
  }
});
