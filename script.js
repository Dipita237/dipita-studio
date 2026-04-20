// On récupère le bouton hamburger et le menu mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Quand on clique sur le hamburger...
hamburger.addEventListener('click', function() {
  // ...on ajoute ou enlève la classe "open" sur le menu
  mobileMenu.classList.toggle('open');
});

// Quand on clique sur un lien du menu mobile, on ferme le menu
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
  });
});
