/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'scroll-spy',
  'Integration: ScrollSpyComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#scroll-spy}}
      //     template content
      //   {{/scroll-spy}}
      // `);

      this.render(hbs`{{scroll-spy}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
