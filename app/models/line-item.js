import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr('number'),
  quantity: DS.attr('number'),
  order: DS.belongsTo('order', { async: true } ),
  product: DS.belongsTo('product', { async: true } )
});
