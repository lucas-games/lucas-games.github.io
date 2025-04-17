// Get the date element
const dateElement = document.getElementById('date');

// write the date into element
dateElement.innerHTML = new Date();

// hide the element
dateElement.hidden = true;

// alert user
window.alert('Date has been written into p#date but hidden. click the button to show the date.');
