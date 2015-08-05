import DS from 'ember-data';

export default DS.Model.extend({
  step: DS.attr('number'),
  description: DS.attr('string'),
  todo: DS.belongsTo('todo', { async: true } )
});
