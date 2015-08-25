import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.Model.extend({
  file: DS.attr('file'),
  imgUrl: Ember.computed('file', function() {
    return config.apiHost +  this.get('file');
    // return 'http://localhost:3000' + this.get('file');

  })
});
