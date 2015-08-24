/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'responsive-video',
  'Integration: ResponsiveVideoComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#responsive-video}}
      //     template content
      //   {{/responsive-video}}
      // `);

      this.render(hbs`{{responsive-video}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
