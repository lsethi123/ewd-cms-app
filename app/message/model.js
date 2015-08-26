import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  message: DS.attr('string'),
  conversation: DS.belongsTo('conversation')
});
