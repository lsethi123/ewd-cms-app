import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr(),
  startsAt: DS.attr(),
  endsAt: DS.attr(),
  user: DS.belongsTo('user', { async: true } )
});
