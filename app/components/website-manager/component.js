import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['orgChart'],
  data: [
    {id: 1, name: 'My Organization', parent: 0},
    {id: 2, name: 'CEO Office', parent: 1},
    {id: 3, name: 'Division 1', parent: 1},
    {id: 4, name: 'Division 2', parent: 1},
    {id: 6, name: 'Division 3', parent: 1},
    {id: 7, name: 'Division 4', parent: 1},
    {id: 8, name: 'Division 5', parent: 1},
    {id: 5, name: 'Sub Division', parent: 3}
  ],

  didInsertElement: function() {
    let self = this;
    let orgChart = this.$('').orgChart({
      data: this.get('data'),
      showControls: true,
      allowEdit: true,
      onAddNode: function(node) {
        orgChart.newNode(node.data.id);
        self.add(node.data);
      },
      onDeleteNode: function(node) {
        orgChart.deleteNode(node.data.id);
        self.delete(node.data);
      },
      onClickNode: function(node) {
        self.redirect(node.data);
      },
      newNodeText: 'Add'

    });
  },

  redirect: function(model) {
    alert(this);
  },

  add: function(model) {

  },

  delete: function(model) {

  }

});
