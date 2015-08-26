import Ember from 'ember';

export default Ember.Controller.extend({
  updateMsg: function() {
    this.send('reloadMessages');
  }.on('init'),


  actions: {

    reloadMessages: function() {
      setInterval(() => {
        let messages = this.store.findAll('message');
        let currentMessage = this.get('model');
        if (currentMessages === messages) {
          this.send('reloadMessages');
        } else {
          this.set('model', messages);

        }
        var msgList = $("#messages-list").get(0);
        msgList.scrollTop = msgList.scrollHeight;
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
