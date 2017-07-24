function showNavbarElements() {
  var navbar = document.getElementById('navbar-main');
  console.log('toggle was clicked. Current class is [' + navbar.className + ']');
  if (navbar.className === 'navbar') {
    navbar.className += ' navbar-responsive';
  }
  else {
    navbar.className = 'navbar';
  }
  console.log('navbar class is now [' + navbar.className + ']');
}
