import Ember from 'ember';

export default Ember.Controller.extend({
  board: null,
  checklists: [],
  checklistStep: 1,

  actions: {
    add: function() {
      this.set('sendingData', true);
      let todo = this.get('model');
      todo.set('board', this.get('board')).set('user', this.get('selectedUser')).save().then((todo) => {
        if(this.get('checklists')) {
          this.get('checklists').forEach((checklist) => {
            let newChecklist = this.store.createRecord('checklist', {
              step: checklist.step,
              description: checklist.description,
              todo: todo
            });
            newChecklist.save().then((checklist) => {
            });
          });
        }
        this.set('checklists', []);
        this.set('checklistStep', 1);
        this.set('checklistDescription', null);
        this.set('sendingData', false);
        this.transitionToRoute('todos.boards.index');
      });
    },

    cancel: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },

    closeModal: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },

    addStep: function() {
      this.set('isAddingStep', true);
    },

    saveStep: function() {
      let checklist = {
        step: this.get('checklistStep'),
        description: this.get('checklistDescription')
      };
      this.get('checklists').pushObject(checklist);
      this.incrementProperty('checklistStep');
      this.set('checklistDescription', null);
      this.set('isAddingStep', false);
      let checklistItem = Ember.$("<p class='checklist-item'>" + checklist.step + ". " + checklist.description + "</p>");
      Ember.$('.checklist-item').last().after(checklistItem);
    }
  }
});
