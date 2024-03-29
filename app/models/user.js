import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  /*
  avatar: DS.attr('file'),
  avatarUrl: Ember.computed('avatar', function() {
    return "http://hcr.ewebdesign.co" + this.get('avatar');
  }), */
  password: DS.attr('string'),
  team: DS.belongsTo('team', { async: true } ),
  tasks: DS.hasMany('task', { async: true } ),
  todos: DS.hasMany('todo', { async: true } ),
  websites: DS.hasMany('website', { async: true } ),
  events: DS.hasMany('event', { async: true } ),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
