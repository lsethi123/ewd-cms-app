import Ember from 'ember';

export default Ember.Controller.extend({
  sender: null,
  recipient: null,
  conversation: null,

  actions: {
    sendMessage: function() {
      let conversation = this.get('conversation');
      let sender = this.get('sender');
      let recipient = this.get('recipient');
      let message = this.get('messageBody');

      if(conversation) {
        let newMessage = this.store.createRecord('message', {
          sender: sender,
          conversation: conversation,
          message: message
        }).save();
      } else {
        let newConversation = this.store.createRecord('conversation', {
          sender: sender,
          recipient: recipient
        });
        newConversation.save().then((savedConversation) => {
          let newMessage = this.store.createRecord('message', {
            sender: sender,
            conversation: savedConversation,
            message: message
          });
          newMessage.save();
        });
      }
    }
  }
});
