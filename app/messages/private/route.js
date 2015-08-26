import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    let currentUser = this.get('session.secure.id');

    return new Ember.RSVP.hash({
      sender: this.store.findRecord('user', currentUser),
      recipient: this.store.findRecord('user', params.user_id),
      conversation: this.store.query('conversation', { recipient_id: params.user_id, sender_id: currentUser } )
    });
  },

  setupController: function(controller, models) {
    let sender = models.sender;
    let recipient = models.recipient;
    let conversation = models.conversation;

    controller.set('sender', sender);
    controller.set('recipient', recipient);
    controller.set('conversation', recipient);
  }
});
