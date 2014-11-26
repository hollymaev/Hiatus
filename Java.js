'use strict';

$('#slider .slides').animate({'margin-left':-=720}, 1000)

      var width=720;
      var animationSpeed=1000;
      var pause=3000;
      var $slider =$('#slider');
      var $slideContainer=$slider.find('.slides');
      var $slides=$slideContainer.find('.slide');
      setInterval)function() {
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed);
      }, pause);