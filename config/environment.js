/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ewd-cms',
    environment: environment,
    baseURL: '/',
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
     }
  };


  ENV['simple-auth'] = {
    crossOriginWhitelist: ['http://localhost:3000'],
    store: 'simple-auth-session-store:local-storage',
    authorizer: 'authorizer:ewd-cms'
  };

  ENV['mandrill'] = {
    api: {
      host: 'https://mandrillapp.com/api/1.0/',
      key: 'fAYDGli8RCVZfWMTz76vnQ'
    },

    smtp: {
      host: 'smtp.mandrillapp.com',
      port: 587,
      username: 'djbradyla@gmail.com',
      password: 'fAYDGli8RCVZfWMTz76vnQ'
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.baseURL = '/';
    ENV.rootURL = '/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/';
    ENV.rootURL = '/';
    ENV.locationType = 'hash';
  }

  return ENV;
};
