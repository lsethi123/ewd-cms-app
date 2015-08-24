import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$().slider();
    // this.$().slider({full_width: true});
  }
});
