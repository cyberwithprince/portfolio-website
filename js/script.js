// Smooth scrolling for navigation
// Tab switching for About section

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for nav links
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Tab switching logic
    var tablinks = document.getElementsByClassName('tab-links');
    var tabcontents = document.getElementsByClassName('tab-contents');
    Array.from(tablinks).forEach(function(tablink) {
        tablink.addEventListener('click', function(event) {
            Array.from(tablinks).forEach(function(tl) {
                tl.classList.remove('active-link');
            });
            Array.from(tabcontents).forEach(function(tc) {
                tc.classList.remove('active-tab');
            });
            tablink.classList.add('active-link');
            var tabname = tablink.textContent.toLowerCase();
            var tabcontent = document.getElementById(tabname);
            if (tabcontent) {
                tabcontent.classList.add('active-tab');
            }
        });
    });
});
