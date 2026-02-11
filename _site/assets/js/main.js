// Initialize the typing animation after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    strings: [
      'a Cheminformatics Expert',
      'a Machine Learning Researcher',
      'a Graph Theory Enthusiast',
      'a Software Developer',
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
  };
  new Typed('.typed-text', options);
});