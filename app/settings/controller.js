import Ember from 'ember';

export default Ember.Controller.extend({
  didInsertElement: function() {
    this.$().pushpin({ top: $('.tabs-wrapper').offset().top });
  }
});
