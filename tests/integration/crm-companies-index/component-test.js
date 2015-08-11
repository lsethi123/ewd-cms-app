/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'crm-companies-index',
  'Integration: CrmCompaniesIndexComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#crm-companies-index}}
      //     template content
      //   {{/crm-companies-index}}
      // `);

      this.render(hbs`{{crm-companies-index}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
