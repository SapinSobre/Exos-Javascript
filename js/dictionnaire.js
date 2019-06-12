// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

var dListe = document.createElement('dl');
var contenu  = document.getElementById("contenu");
for(var i = 0, j = mots.length; i < j; i++){
    var gras = document.createElement('strong');
    var terme = document.createElement('dt');
    terme.textContent = mots[i].terme;
    gras.appendChild(terme);
    var def = document.createElement('dd');
    def.textContent = mots[i].definition;
    dListe.appendChild(gras);
    dListe.appendChild(def);
}

contenu.appendChild(dListe);