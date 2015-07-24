import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dueDate: DS.attr(),
  employee: DS.belongsTo('employee', { async: true } ),
  user: DS.belongsTo('user', { async: true } ),
  company: DS.belongsTo('company', { async: true } )
});
