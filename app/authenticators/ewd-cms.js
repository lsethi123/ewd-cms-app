import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({

    restore: function(properties) {
      var that = this;
      var propertiesObject = Ember.Object.create(properties);
      return new Ember.RSVP.Promise(function(resolve, reject) {
        if (!Ember.isEmpty(propertiesObject.get('token')) && !Ember.isEmpty(propertiesObject.get('email'))) {
          resolve(properties);
        } else {
          reject();
        }
      });
    },

    authenticate: function(options) {
      var that = this;
      return new Ember.RSVP.Promise(function(resolve, reject) {
        var credentials = {};
        credentials['user'] = {
          email: options.identification,
          password: options.password
        };
        that.authenticateUserWith(credentials).then(function(response) {
          Ember.run(function() {
            resolve(response);
          });
        }, function(xhr) {
          Ember.run(function() {
            reject(xhr.responseJSON || xhr.responseText);
          });
        });
      });
    },

    invalidate: function(properties) {
      return Ember.RSVP.resolve();
    },

    authenticateUserWith: function(credentials) {
      return Ember.$.ajax({
        url: config.apiHost + '/' + config.apiName + '/sessions',

        type: 'POST',
        data: credentials,
        dataType: 'json',
        beforeSend: function(xhr, settings) {
          xhr.setRequestHeader('Accept', settings.accepts.json);
        }
      });
    }
});
