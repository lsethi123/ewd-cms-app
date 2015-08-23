import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('settings');
  this.route('blog', function() {
    this.route('posts', function() {
      this.route('show', { path: ':post_id' } );
      this.route('new');
    });
    this.route('tags', function() {
      this.route('new');
      this.route('show', { path: ':tag_id' } );
    });
  });
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
          this.route('show', { path: ':employee_id' }, function() {});
          this.route('email', { path: 'email/:employee_id' } );
        });
      });
    });
    this.route('craigslist');
    this.route('forecast');
  });
  this.route('login');
  this.route('signup');
  this.route('estore', function() {
    this.route('products', function() {
      this.route('new');
      this.route('show', { path: ':product_id' } );
    });
    this.route('orders', function() {
      this.route('show', { path: ':order_id' } );
    });
    this.route('categories', function() {
      this.route('new');
      this.route('show', { path: ':category_id'});
    });
  });
  this.route('users', function() {
    this.route('show', { path: ':user_id' } );
  });
  this.route('teams', function() {
    this.route('show', { path: ':team_id' } );
    this.route('new');
  });
  this.route('events', function() {
    this.route('show', { path: ':event_id' } );
    this.route('new');
  });
  this.route('todos', function() {
    this.route('boards', function() {
      this.route('show', { path: ':board_id' } );
      this.route('new');
    });
    this.route('new');
    this.route('show', { path: ':todo_id' } );
  });
  this.route('pages', function() {
    this.route('show', { path: ':page_id' }, function() {
      this.route('slider', function() {
        this.route('edit');
        this.route('new');
      });
    });
    this.route('new');
  });
});

export default Router;
