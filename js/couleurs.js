var fond = prompt("Veuillez saisir une couleur de fond.");
var police = prompt("Veuillez saisir une couleur de police.");
var parags = document.getElementsByTagName('div');
for(var i = 0, j = parags.length; i<j; i++){
    parags[i].style.backgroundColor = fond;
    parags[i].style.color = police;
}
