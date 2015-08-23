import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr(),
  start: DS.attr(),
  end: DS.attr()
});
