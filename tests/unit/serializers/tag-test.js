/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'serializer:tag',
  'TagSerializer',
  {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var serializer = this.subject();
      expect(serializer).to.be.ok;
    });
  }
);
