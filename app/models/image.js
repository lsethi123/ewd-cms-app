import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  file: DS.attr('file'),
  imgUrl: Ember.computed('file', function() {
    return 'http://localhost:3000' + this.get('file');
  })
});
