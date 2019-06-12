var titre = document.createElement('h2');
titre.textContent = "Informations sur l'élément";
var infos = document.getElementById("infos");
infos.appendChild(titre);

var liste = document.createElement("ul");
var puceHaut = document.createElement('li');
var puceLong = document.createElement('li');
puceHaut.appendChild(document.createTextNode("Hauteur: "));
puceLong.appendChild(document.createTextNode("Longueur: "));
var contenu = document.getElementById("contenu");
var styles = getComputedStyle(contenu);
var longueur = styles.width;
var hauteur = styles.height;
puceHaut.textContent += hauteur;
puceLong.textContent += longueur;

liste.appendChild(puceHaut);
liste.appendChild(puceLong);
infos.appendChild(liste);