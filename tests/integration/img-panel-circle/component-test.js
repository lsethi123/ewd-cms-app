/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'img-panel-circle',
  'Integration: ImgPanelCircleComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#img-panel-circle}}
      //     template content
      //   {{/img-panel-circle}}
      // `);

      this.render(hbs`{{img-panel-circle}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
