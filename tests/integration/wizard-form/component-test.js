/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'wizard-form',
  'Integration: WizardFormComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#wizard-form}}
      //     template content
      //   {{/wizard-form}}
      // `);

      this.render(hbs`{{wizard-form}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
