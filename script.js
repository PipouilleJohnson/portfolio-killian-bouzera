// Ajouter un écouteur d'événement pour le clic sur l'icône du menu
document.querySelector('#menu-burger').addEventListener('click', function () {
    // Inverser la classe "active" du menu pour afficher/cacher le menu
    document.querySelector('#menu-burger').classList.toggle('active');
});