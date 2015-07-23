import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  employees: DS.hasMany('employee'),
  opportunities: DS.hasMany('opportunity')
});
