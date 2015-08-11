import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  image: DS.attr('file'),
  imageUrl: Ember.computed('image', function() {
    return "http://api.ewebdesign.co" + this.get('image');
  }),
  inStock: DS.attr('boolean'),
  categories: DS.hasMany('category', { async: true } )
});
