import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  stage: DS.attr('string'),
  estimatedClose: DS.attr(),
  estimatedAmount: DS.attr('string'),
  forecast: Ember.computed('stage', 'estimatedAmount', function() {
    let stage = this.get('stage');
    let estAmt = this.get('estimatedAmount');
    switch(stage) {
      case "Demo":
        return estAmt * 0.10;
      case "Evaluation":
        return estAmt * 0.15;
      case "Solutions Planning Call":
        return estAmt * 0.25;
      case "Quote":
        return estAmt * 0.50;
    }
  }),
  company: DS.belongsTo('company', { async: true } )
});
