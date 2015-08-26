import DS from 'ember-data';

export default DS.Model.extend({
  sender: DS.belongsTo('user'),
  recipient: DS.belongsTo('user'),
  messages: DS.hasMany('message')
});
