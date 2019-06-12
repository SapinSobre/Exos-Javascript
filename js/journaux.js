// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
var contenu = document.getElementById("contenu");
var liste = document.createElement('ul');
for(var i = 0; i < journaux.length; i++){
    var puce = document.createElement('li');
    var link = document.createElement('a');
    link.textContent = journaux[i];
    link.href = journaux[i];
    puce.appendChild(link);
    liste.appendChild(puce);
}
contenu.appendChild(liste); 
