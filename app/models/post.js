import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  body: DS.attr('string'),
  published: DS.attr('boolean'),
  tags: DS.hasMany('tag', { async: true } ),
  images: DS.hasMany('image', { async: true } )
});
