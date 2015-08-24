/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'event-subnav',
  'Integration: EventSubnavComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#event-subnav}}
      //     template content
      //   {{/event-subnav}}
      // `);

      this.render(hbs`{{event-subnav}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
