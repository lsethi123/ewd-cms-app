export default function () {
  var duration = 500;
  this.transition(
    this.fromRoute('login'),
    this.toRoute('signup'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('login'),
    this.toRoute('index'),
    this.use('fade'),
    this.reverse('fade')
  );
  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('crm'),
  //   this.use('toUp'),
  //   this.reverse('toDown')
  // );
  //
  // this.transition(
  //   this.fromRoute('crm'),
  //   this.toRoute('blog'),
  //   this.use('toUp'),
  //   this.reverse('toDown')
  // );
  // this.transition(
  //   this.fromRoute('blog'),
  //   this.toRoute('todos'),
  //   this.use('toUp'),
  //   this.reverse('toDown')
  // );
  // this.transition(
  //   this.fromRoute('todos'),
  //   this.toRoute('settings'),
  //   this.use('toUp'),
  //   this.reverse('toDown')
  // );
  // this.transition(
  //   this.fromRoute('settings'),
  //   this.toRoute('index'),
  //   this.use('toDown'),
  //   this.reverse('toUp')
  // );


  // this.transition(
  //   this.fromRoute('index'),
  //   this.toRoute('gallery'),
  //   this.use('explode', {
  //     matchBy: 'data-logo-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toLeft', { duration } ]
  //   }),
  //   this.reverse('explode', {
  //     matchBy: 'data-logo-id',
  //     use: ['flyTo', { duration } ]
  //   }, {
  //     use: ['toRight', { duration } ]
  //   })
  // );
}
