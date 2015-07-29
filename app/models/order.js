import DS from 'ember-data';

export default DS.Model.extend({
  total: DS.attr('number'),
  state: DS.attr('string'),
  lineItems: DS.hasMany('line-item', { async: true } )
});
