// Get all navigation links and content sections
const navLinks = document.querySelectorAll('.navbar-link');
const articles = document.querySelectorAll('article');

// Loop through each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetPage = link.getAttribute('data-nav-link');

    // Check if the target is 'resume'
    if (targetPage === 'resume') {
      // Redirect to the resume link
      window.open('https://drive.google.com/file/d/1hYUEP7CbTPct2rJLEtfiV0i5pNc0EUSp/view?usp=drive_link', '_blank');
    } else {
      // Show the respective content section
      articles.forEach(article => {
        if (article.getAttribute('data-page') === targetPage) {
          article.classList.add('active');
        } else {
          article.classList.remove('active');
        }
      });

      // Update the active class on the navbar links
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });
      link.classList.add('active');
    }
  });
});
