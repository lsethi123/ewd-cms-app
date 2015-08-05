import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  team: DS.belongsTo('team', { async: true } ),
  todos: DS.hasMany('todo', { async: true } )
});
