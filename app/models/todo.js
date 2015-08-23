import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  dueDate: DS.attr(),
  user: DS.belongsTo('user', { async: true } ),
  board: DS.belongsTo('board', { async: true } ),
  checklists: DS.hasMany('checklist', { async: true } )
});
