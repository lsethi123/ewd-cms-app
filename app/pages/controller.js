import Ember from 'ember';

export default Ember.Controller.extend({
  fade: false,
  autoplay: false,
  slidesToShow: 1,
  dots: false,
  isAddingImage: false,

  actions: {
    fade: function() {
      this.toggleProperty('fade');
    },

    autoplay: function() {
      this.toggleProperty('autoplay');
    },

    moreSlides: function() {
      this.set('slidesToShow', 2);
    },

    dots: function() {
      this.toggleProperty('dots');
    },

    addImage: function() {
      this.toggleProperty('isAddingImage');
    },

    done: function() {
      let file = document.getElementById('file-field').files[0];
      let image = this.store.createRecord('image', {
        file: file
      });
      image.save().then((img) => {
        this.toggleProperty('isAddingImage');
        this.transitionToRoute('pages');
      });
    }
  }
});
