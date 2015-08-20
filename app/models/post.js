import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  body: DS.attr('string'),
  image: DS.attr('file'),
  imageUrl: Ember.computed('image', function() {
    return "http://hcr.ewebdesign.co" + this.get('image');
    // return "http://localhost:3000" + this.get('image');
  }),
  published: DS.attr('boolean'),
  tags: DS.hasMany('tag', { async: true } )
});
