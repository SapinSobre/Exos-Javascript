//document.getElementById("langages").innerHTML += '<li id="c">C</li>';
var parag = document.createElement('p');
var lien = document.createElement('a');
lien.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lien.textContent = "liste";
parag.appendChild(document.createTextNode("En voici une "));
parag.appendChild(lien);
parag.appendChild(document.createTextNode(" complète."));
var contenu = document.getElementById("contenu");
contenu.appendChild(parag);

