import Ember from 'ember';

export default Ember.Controller.extend({
  sentSuccessfully: false,
  selectedTemplate: null,

  sender: function() {
    return this.get('session.secure.first_name') + ' ' + this.get('session.secure.last_name');
  }.property('session.secure.first_name', 'session.secure.last_name'),

  templateA: function() {
    return 'Hello, ' + '<strong>' + this.get('model.fullName') + '</strong>!<br/><br/>' + 'Thank you for being ' + this.get('model.role') + '.<br/>We are very happy to work with your company ' + this.get('model.company.name') + '!<br/><br/>Regards,<br/>' + this.get('session.secure.first_name') + ' ' + this.get('session.secure.last_name');
  },

  actions: {
    selectTemplate: function(template) {
      Ember.$('templateA').addClass('z-depth-3');
      this.set('selectedTemplate', template);
    },

    sendEmail: function() {
      let email = {
        message: {
          html: this.get('emailMessage'),
          subject: this.get('emailSubject'),
          from_email: this.get('session.secure.email'),
          from_name: this.get('sender'),
          to: [
            {
              email: this.get('model.email'),
              name: this.get('model.fullName'),
              type: "to"
            }
          ]
        }
      };

      this.mandrill.send(email).then((response) => {
        this.set('sentSuccessfully', true);
        this.get('flashMessages').success('Email sent Successfully!');
      });
    },

    done: function() {
      this.transitionToRoute('crm.companies.show.employees.index');
      this.set('emailSubject', null);
      this.set('emailMessage', null);
      this.set('sentSuccessfully', false);
    },

    closeModal: function() {
      this.transitionToRoute('crm.companies.show.employees.index');
      this.set('emailSubject', null);
      this.set('emailMessage', null);
      this.set('sentSuccessfully', false);
    }
  }

});
