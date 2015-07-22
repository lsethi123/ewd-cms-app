/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'side-panel',
  'Integration: SidePanelComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#side-panel}}
      //     template content
      //   {{/side-panel}}
      // `);

      this.render(hbs`{{side-panel}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
