/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'material-slider',
  'Integration: MaterialSliderComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#material-slider}}
      //     template content
      //   {{/material-slider}}
      // `);

      this.render(hbs`{{material-slider}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
