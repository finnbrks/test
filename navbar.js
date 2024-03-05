// script.js

// Get the current URL
var currentUrl = window.location.pathname;

// Find the link that corresponds to the current URL and add the "active" class
document.querySelectorAll('.nav-link').forEach(function(link) {
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});
