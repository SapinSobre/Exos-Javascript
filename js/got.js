// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

var inputMaison = document.getElementById('maison');
var listeMaisons = document.getElementById('maison');
maisons.forEach(function(maison){
    var option = document.createElement('option');
    option.setAttribute('name', maison.nom);
    option.setAttribute('value', maison.code);
    option.textContent = maison.nom;
    listeMaisons.appendChild(option);
});

inputMaison.addEventListener("change", function(e){
    var choix = e.target.value;
    var liste = document.getElementById('persos');
    var listePersos = getPersonnages(choix);
    liste.innerHTML = "";
    listePersos.forEach(function(persoListe){
        var perso = document.createElement('li');
        perso.textContent =  persoListe;
        liste.appendChild(perso);   
    });
});

