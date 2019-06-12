function ColorParag(e){
    var touche = String.fromCharCode(e.charCode).toUpperCase();
    switch(touche){
        case "B" :
            color = "blue";
            break;
        case "R" :
            color = "red";
            break;
        case "J" : 
            color = "yellow";
            break;
        case "V" :
            color = "green";
            break;
        default : 
            console.log("Choix possibles : 'b', 'r', 'j', 'v'");
    }
    for(var i = 0, j = parags.length; i<j; i++){
        parags[i].style.backgroundColor = color;
    }
}
    
var color = "rien";
var parags = document.getElementsByTagName('div');
document.addEventListener("keypress", ColorParag);
   

