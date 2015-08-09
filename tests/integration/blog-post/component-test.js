/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'blog-post',
  'Integration: BlogPostComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#blog-post}}
      //     template content
      //   {{/blog-post}}
      // `);

      this.render(hbs`{{blog-post}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
