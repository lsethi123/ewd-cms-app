/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'layoutview-card',
  'Integration: LayoutviewCardComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#layoutview-card}}
      //     template content
      //   {{/layoutview-card}}
      // `);

      this.render(hbs`{{layoutview-card}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
