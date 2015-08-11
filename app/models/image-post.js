import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.belongsTo('image'),
  post: DS.belongsTo('post')
});
