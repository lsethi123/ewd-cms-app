/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'crm-news-feed',
  'Integration: CrmNewsFeedComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#crm-news-feed}}
      //     template content
      //   {{/crm-news-feed}}
      // `);

      this.render(hbs`{{crm-news-feed}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
