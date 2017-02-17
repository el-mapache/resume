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

    if (currOffset > topOffset && topOfset > 0) {
      menu.style.left = menuPosition.left + 'px';
      menu.classList.add('stick');
      placeholder.classList.remove('hide');
    } else if (currOffset <= topOffset || topOffset < 0) {
      menu.style.left = 0;
      menu.classList.remove('stick');
      placeholder.classList.add('hide');
    }
  }

  function animateSkills() {
    var skills = [].slice.call(document.querySelectorAll('.skill-item'));

    skills.forEach(function(skillNode) {
      var progressInner = skillNode.querySelector('.inner');
      progressInner.classList.add('fill-left')
    })
  }

  // should throttle this, but its a pretty lightweight page
  window.addEventListener('scroll', handleScroll);

  window.scroll(0,0);
  setTimeout(animateSkills, 0);
});
