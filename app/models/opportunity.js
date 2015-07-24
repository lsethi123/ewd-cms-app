import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  stage: DS.attr('string'),
  estimatedClose: DS.attr(),
  estimatedAmount: DS.attr('string'),
  company: DS.belongsTo('company', { async: true } )
});
