/ Fonction générique pour afficher l'alerte
function showAlert() {
  alert("Merci d'avoir visité ce site que j'ai créé. Si mes services vous intéressent, je vous invite à m'envoyer un message sur COMEUP. Merci d'avance !");
}

// Capture du clic sur le bouton Envoyer
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // empêche le rechargement de la page
  showAlert();
});

// Capture de la touche Enter dans le formulaire
document.getElementById("contactForm").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault(); // empêche le comportement par défaut
    showAlert();
  }
});
