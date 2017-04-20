var slider = document.querySelector('.price-list');

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    left: box.left + pageXOffset,
    right: box.right + pageXOffset,
  };
};

// slider.addEventListener('touchstart', function(e) {
//   console.log('touched');
//   var coords = getCoords(slider);
//   var shiftLeft = e.changedTouches[0].pageX - coords.left;
//   console.log(e.changedTouches[0].pageX);
//
//   function moveAt(e) {
//     slider.style.left =  e.changedTouches[0].pageX - shiftLeft + 'px';
//     coords = getCoords(slider);
//     console.log('right:' + ' ' + coords.right);
//     console.log('left:' + ' ' + slider.style.left);
//     console.log('viewPort = ' + ' ' + document.documentElement.clientWidth + 'px');
//
//   };
//
//   moveAt(e);
//
//   document.addEventListener('touchmove', function (e) {
//     if (coords.left < 0 && coords.right > document.documentElement.clientWidth) {
//       moveAt(e)
//     };
//   });
//
//   document.addEventListener('touchend', function() {
//     document.touchmove = null;
//   });
// });

slider.onmousedown = function(e) {
  var coords = getCoords(slider);
  var shiftLeft = e.pageX - coords.left;

  function moveAt(e) {
    coords = getCoords(slider);
    slider.style.left = e.pageX - shiftLeft + 'px';
  };

  document.onmousemove = function (e) {
    if (coords.left <= 0 && coords.right >= document.documentElement.clientWidth) {
      moveAt(e);
    }
  };

  document.onmouseup = function () {
    document.onmousemove = null;
    slider.onmouseup = null;
    if (coords.left >= 0) {
      slider.style.left = 0 + 'px';
    } else if (coords.right <= document.documentElement.clientWidth) {
      slider.style.left = - (slider.clientWidth - document.documentElement.clientWidth) + 'px';
    }
  };
};

slider.ondragstart = function() {
  return false;
};

function switchPagination () {
  var pagination = document.getElementById('js-table_pagination');

}
