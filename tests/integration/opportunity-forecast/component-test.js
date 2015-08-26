/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'opportunity-forecast',
  'Integration: OpportunityForecastComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#opportunity-forecast}}
      //     template content
      //   {{/opportunity-forecast}}
      // `);

      this.render(hbs`{{opportunity-forecast}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
