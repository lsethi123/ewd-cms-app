/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'dash-video',
  'Integration: DashVideoComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#dash-video}}
      //     template content
      //   {{/dash-video}}
      // `);

      this.render(hbs`{{dash-video}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
