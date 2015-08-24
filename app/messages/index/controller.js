import Ember from 'ember';

export default Ember.Controller.extend({
  updateMsg: function() {
    this.send('reloadMessages');
  }.on('init'),


  actions: {

    reloadMessages: function() {
      setInterval(() => {
        let messages = this.store.findAll('message');
        this.set('model', messages);
      }, 5000);
    },

    sendMessage: function() {
      let message = this.get('messageToSend');

      let user = this.get('user');
      let newMessage = this.store.createRecord('message', {
        user: user,
        message: message
      });

      newMessage.save().then((msg) => {
        this.set('messageToSend', null);
      });
    }
  }
});
