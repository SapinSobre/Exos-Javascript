function ChangerDessert(e){
    var newDessert = prompt("Veuillez entrer un nouveau nom de dessert.");
    e.target.textContent = newDessert;
}
function AjouterDessert(){
    var dessert = prompt("Entrez un dessert.");
    var liste = document.getElementById("desserts");
    var ele = document.createElement('li');
    ele.textContent = dessert;
    liste.appendChild(ele);
    ele.addEventListener("click", ChangerDessert);
}

var bouton = document.querySelector('button');
bouton.addEventListener("click", AjouterDessert);


    

