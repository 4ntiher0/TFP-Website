document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav a');
  const sections = document.querySelectorAll('.section');

  // Initially show the home section
  sections[0].classList.add('active');

  // Handle navigation link clicks
  navLinks.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();
          const targetSection = link.getAttribute('href').substring(1); // Remove the "#" character

          sections.forEach(section => {
              section.classList.remove('active', 'flip');
              if (section.id === targetSection) {
                  section.classList.add('active', 'flip');
              }
          });
      });
  });

  // Function to flip a specific section
  function flipSection(index) {
      sections[index].classList.toggle('flip');
  }

  // Add an event listener to trigger the flip for each section
  sections.forEach((section, index) => {
      section.addEventListener('click', () => flipSection(index));
  });
});


