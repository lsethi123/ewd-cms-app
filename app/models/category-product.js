import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', { async: true } ),
  product: DS.belongsTo('product', { async: true } )
});
