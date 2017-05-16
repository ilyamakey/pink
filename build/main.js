var slider = document.querySelector('.price-list');

slider.getCoords = function() {
  var box = this.getBoundingClientRect();
    this.left = box.left + pageXOffset;
    this.right = box.right + pageXOffset;
};

function getShift(e) {
  if(!e.pageX) {
    return e.touches[0].pageX - slider.left;
  } else {
    return  e.pageX - slider.left;
  }
};

function moveAt(e, shift) {
  slider.getCoords();
  if(!e.pageX) {
    slider.style.left = e.touches[0].pageX - shift + 'px';
  } else {
    slider.style.left = e.pageX - shift + 'px';
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

function removeClass(collection, className) {
  for(var i=0; i<collection.length; i++) {
    collection[i].classList.remove(className);
  }
};

slider.addEventListener('mousedown', function(e) {

  slider.getCoords();
  switchPagination();

  var shiftLeft = getShift(e);

  document.onmousemove = function (e) {
    if (slider.left <= 0 && slider.right >= document.documentElement.clientWidth) {
      moveAt(e, shiftLeft);
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

slider.addEventListener('touchstart', function(e) {
  slider.getCoords();
  switchPagination();

  var shiftLeft = getShift(e);

  document.ontouchmove = function (e) {
    if (slider.left <= 0 && slider.right >= document.documentElement.clientWidth) {
      moveAt(e, shiftLeft);
      switchPagination();
    }
  };

  document.ontouchend = function () {
    document.ontouchmove = null;
    slider.onmouseup = null;
      if (slider.left >= 0) {
        slider.style.left = 0 + 'px';
      } else if (slider.right <= document.documentElement.clientWidth) {
        slider.style.left = - (slider.clientWidth - document.documentElement.clientWidth) + 'px';
      }
  }
});

//browser default moving handler reset
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
