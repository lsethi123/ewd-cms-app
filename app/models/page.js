import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  website: DS.belongsTo('website'),
  slider: DS.belongsTo('slider', { async: true } ),
  images: DS.hasMany('image')
});
