import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    var secureData = this.get('session.secure');
    var userToken = secureData['token'];
    var userIdentification = secureData['email'];
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(userToken) && !Ember.isEmpty(userIdentification)) {
      var authData = 'token="' + userToken + '"';
      jqXHR.setRequestHeader('Authorization', 'Token ' + authData);
    }
  }
});
