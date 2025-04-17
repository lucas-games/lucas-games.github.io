function topnav() {
  topnav = document.getElementById('topnav');
  if (topnav.className === 'topnav') {
    topnav.className += ' responsive';
  } else {
    topnav.className = 'topnav';
  }
}
