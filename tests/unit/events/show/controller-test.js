/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'controller:events/show',
  'EventsShowController',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var controller = this.subject();
      expect(controller).to.be.ok;
    });
  }
);
