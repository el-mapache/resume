document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById('skills');
  var menuPosition = menu.getBoundingClientRect();
  var placeholder = document.createElement('div');
  var topOffset = menuPosition.top - 10;

  placeholder.style.width = menuPosition.width + 'px';
  placeholder.style.height = menuPosition.height + 'px';
  placeholder.style.left = menuPosition.left + 'px';

  placeholder.classList.add('col-xs-3', 'hide');

  menu.parentNode.insertBefore(placeholder, menu);

  function handleScroll() {
    var currOffset = window.pageYOffset;

    if (currOffset >= topOffset) {
      menu.classList.add('clone');
      document.body.classList.add('down');
      placeholder.classList.remove('hide');

    } else if (currOffset < topOffset) {
      menu.classList.remove('clone');
      document.body.classList.remove('down');
      placeholder.classList.add('hide')
      isAdded = false;
    }
  }
  // should throttle this, but its a pretty lightweight page
  window.addEventListener('scroll', handleScroll);

  window.scroll(0,0);
});
