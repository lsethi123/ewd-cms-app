import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  role: DS.attr('string'),
  title: DS.attr('string'),
  phone: DS.attr('string'),
  company: DS.belongsTo('company', { async: true } ),
  tasks: DS.hasMany('task', { async: true } ),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
