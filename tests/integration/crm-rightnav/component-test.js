/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'crm-rightnav',
  'Integration: CrmRightnavComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#crm-rightnav}}
      //     template content
      //   {{/crm-rightnav}}
      // `);

      this.render(hbs`{{crm-rightnav}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
