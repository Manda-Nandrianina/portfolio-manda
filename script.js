// Fonction générique pour afficher l'alerte
function showAlert() {
  alert("Merci d'avoir visité ce site que j'ai créé. Si mes services vous intéressent, je vous invite à m'envoyer un message sur COMEUP. Merci d'avance !");
  console.log("Formulaire soumis - message d'alerte affiché");
}

// Capture du clic sur le bouton Envoyer (et touche Enter par défaut)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // empêche le rechargement de la page
  showAlert();
});
