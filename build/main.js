var slider = document.querySelector('.price-list');
slider.getCoords = function() {
  var box = this.getBoundingClientRect();
    this.left = box.left + pageXOffset;
    this.right = box.right + pageXOffset;
};

slider.addEventListener('mousedown', function(e) {
  function moveAt(e) {
    slider.getCoords();
    slider.style.left = e.pageX - shiftLeft + 'px';
  };

  function removeClass(collection, className) {
    var i;
    for(i=0; i<collection.length; i++) {
      collection[i].classList.remove(className);
    }
  };

  function switchPagination () {
    var pagination = document.getElementById('js-table_pagination');
    var circle = pagination.getElementsByTagName('div');
    var viewPort = slider.clientWidth - document.documentElement.clientWidth;
      if (slider.left >= - (viewPort * 1/3)) {
        removeClass(circle, 'pagination__circle_active');
        circle[0].classList.add('pagination__circle_active');

      } else if (slider.left >= - (viewPort * 2/3)) {
          removeClass(circle, 'pagination__circle_active');
          circle[1].classList.add('pagination__circle_active');

      } else {
          removeClass(circle, 'pagination__circle_active');
          circle[2].classList.add('pagination__circle_active');
      }
  };

  slider.getCoords();
  var shiftLeft = e.pageX - slider.left;
  switchPagination();

  document.onmousemove = function (e) {
    if (slider.left <= 0 && slider.right >= document.documentElement.clientWidth) {
      moveAt(e);
      switchPagination();
    }
  };

  document.onmouseup = function () {
    document.onmousemove = null;
    slider.onmouseup = null;
      if (slider.left >= 0) {
        slider.style.left = 0 + 'px';
      } else if (slider.right <= document.documentElement.clientWidth) {
        slider.style.left = - (slider.clientWidth - document.documentElement.clientWidth) + 'px';
      }
  };
});

// slider.addEventListener('touchstart', function(e) {
//   console.log('touched');
//   slider.getCoords();
//   var shiftLeft = e.changedTouches[0].pageX - slider.left;
//   // console.log(e.changedTouches[0].pageX);
//
//   function moveAt(e) {
//     slider.getCoords();
//     slider.style.left =  e.changedTouches[0].pageX - shiftLeft + 'px';
//   };
//
//   // moveAt(e);
//   slider.ontouchmove = function(e) {
//     console.log('j');
//     if (slider.left <= 0 && slider.right >= document.documentElement.clientWidth) {
//       moveAt(e);
//       // switchPagination();
//   }
// };
//
//   document.ontouchend = function () {
//     document.ontouchmove = null;
//       if (slider.left >= 0) {
//         slider.style.left = 0 + 'px';
//       } else if (slider.right <= document.documentElement.clientWidth) {
//         slider.style.left = - (slider.clientWidth - document.documentElement.clientWidth) + 'px';
//       }
//   };
// });

slider.ondragstart = function() {
  return false;
};

//navigation behavior
var navToggle = document.getElementById('js-nav');
var navigation = document.querySelector('.navigation');
var header = document.querySelector('.header');

navToggle.addEventListener('click', function () {
  this.classList.toggle("nav-toggle--open");
  navigation.classList.toggle("navigation--hidden");
  header.classList.toggle("header--opened-navigation");
});
