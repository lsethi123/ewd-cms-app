import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dueDate: DS.attr(),
  employee: DS.belongsTo('employee'),
  user: DS.belongsTo('user')
});
