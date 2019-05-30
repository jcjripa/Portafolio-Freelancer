//Init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  }
});

var scene1 = new ScrollMagic.Scene({
    triggerElement: '#wrapper'
  })
  .setClassToggle('#wrapper-link', 'active')
  .addTo(controller);
var scene2 = new ScrollMagic.Scene({
    triggerElement: '#sobremi'
  })
  .setClassToggle('#link-1', 'active')
  .addTo(controller);
var scene3 = new ScrollMagic.Scene({
    triggerElement: '#certificados'
  })
  .setClassToggle('#link-2', 'active')
  .addTo(controller);
var scene4 = new ScrollMagic.Scene({
    triggerElement: '#proyectos'
  })
  .setClassToggle('#link-3', 'active')
  .addTo(controller);
var scene4 = new ScrollMagic.Scene({
    triggerElement: '#contacto'
  })
  .setClassToggle('#link-4', 'active')
  .addTo(controller);

