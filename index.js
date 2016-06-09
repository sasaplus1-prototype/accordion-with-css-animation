(function(){

  'use strict';

  var toggle = document.getElementById('js-toggle');

  toggle.addEventListener('click', function() {
    var list = document.querySelector('.list');

    list.classList.toggle('close');
  }, false);

}());
