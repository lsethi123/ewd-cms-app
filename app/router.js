import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('settings');
  this.route('blog');
  this.route('crm');
  this.route('todos');
});

export default Router;
