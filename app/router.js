import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('settings');
  this.route('blog');
  this.route('crm', function() {
    this.route('companies', function() {
      this.route('new');
      this.route('show', { path: ':company_id' }, function() {
        this.route('opportunities', function() {
          this.route('new');
          this.route('show', { path: ':opportunity_id' } );
        });
        this.route('tasks', function() {
          this.route('new');
          this.route('show', { path: ':task_id'} );
        });
        this.route('employees', function() {
          this.route('new');
          this.route('show', { path: ':employee_id' } );
        });
      });
    });
  });
  this.route('todos');
  this.route('login');
  this.route('signup');
});

export default Router;
