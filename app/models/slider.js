import DS from 'ember-data';

export default DS.Model.extend({
  accessibility: DS.attr('boolean'),
  adaptiveHeight: DS.attr('boolean'),
  autoplay: DS.attr('boolean'),
  autoplaySpeed: DS.attr('number'),
  arrows: DS.attr('boolean'),
  asNavFor: DS.attr('string'),
  appendArrows: DS.attr('string'),
  prevArrow: DS.attr('string'),
  nextArrow: DS.attr('string'),
  centerMode: DS.attr('boolean'),
  centerPadding: DS.attr('string'),
  cssEase: DS.attr('string'),
  dots: DS.attr('boolean'),
  draggable: DS.attr('boolean'),
  fade: DS.attr('boolean'),
  focusOnSelect: DS.attr('boolean'),
  easing: DS.attr('string'),
  edgeFriction: DS.attr('number'),
  infinite: DS.attr('boolean'),
  initialSlide: DS.attr('number'),
  lazyLoad: DS.attr('string'),
  mobileFirst: DS.attr('boolean'),
  pauseOnHover: DS.attr('boolean'),
  pauseOnDotsHover: DS.attr('boolean'),
  rows: DS.attr('number'),
  slide: DS.attr('string'),
  slidesPerRow: DS.attr('number'),
  slidesToShow: DS.attr('number'),
  slidesToScroll: DS.attr('number'),
  speed: DS.attr('number'),
  swipe: DS.attr('boolean'),
  swipeToSlide: DS.attr('boolean'),
  touchMove: DS.attr('boolean'),
  touchThreshold: DS.attr('number'),
  useCss: DS.attr('boolean'),
  variableWidth: DS.attr('boolean'),
  vertical: DS.attr('boolean'),
  verticalSwiping: DS.attr('boolean'),
  rtl: DS.attr('boolean'),
  page: DS.belongsTo('page', { async: true } ),
  images: DS.hasMany('image', { async: true } )
});
