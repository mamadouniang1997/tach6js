'use strict';
// affichage
var resultats = document.getElementById('resultats');
// initialisation
var compteur = 0;
var numberToFind_Max = 100;
var numberToFind = Math.floor(Math.random()*(numberToFind_Max+10));       

var nb_Coup_Min = 7;
var nb_Coup_Max = 7;
var nb_Coup = get_nb_Coup();

//----------------------------------------------


// nombre de coups
function get_nb_Coup(){
  nb_Coup = prompt("le nombre de tentatives maximales EST 7 :",nb_Coup_Min);
  nb_Coup = Number(nb_Coup); // Numerique
  console.log(nb_Coup);

  if( isNaN(nb_Coup) || nb_Coup < 7 || nb_Coup > 7 )
  {
    resultats.insertAdjacentHTML('beforeend', " vous ne pouvez pas fair que  "+nb_Coup_Max+" tentatives !<br/>");
    nb_Coup = get_nb_Coup();
  } 
  // else {
  //   resultats.insertAdjacentHTML('beforeend', "Vous avez choisi "+nb_Coup+" tentatives maximum.<br/>Commencez vos paris :<br/>");
  // }
  return nb_Coup;
}

function Rejouer(){
  compteur = 0;
  numberToFind = Math.floor(Math.random()*101);
  resultats.textContent = '';
  nb_Coup = get_nb_Coup();
}
function Jouer(){
  var user_Number = document.querySelector("#user_Number").value;
  console.log(nb_Coup);
  compteur++;
  if ( compteur <= nb_Coup ) {
    if (user_Number!==""){
      if (isNaN(user_Number)){
        alert("Ce n'est pas un un nombre !");
      }
    } else {
      alert("Ce champ doit être renseigné");
    }

    if ( user_Number < numberToFind ){
      resultats.insertAdjacentHTML('beforeend', "(" + compteur + ") " + user_Number + " : ce nombre est trop petit<br/>");
    }
    
    else if ( user_Number > numberToFind){
      resultats.insertAdjacentHTML('beforeend', "(" + compteur + ") " + user_Number + " : ce nombre est trop grand<br/>");
    }
    else {
      resultats.insertAdjacentHTML('beforeend', "(" + compteur + ") " + user_Number + " : Bravo ! Vous avez gagné :)<br/>");
    }
  }
  if ( compteur == nb_Coup && user_Number != numberToFind ) {
    resultats.insertAdjacentHTML('beforeend', "<br/>Vous avez utilisé vos " + nb_Coup + " tentatives.<br/>Vous avez perdu ! Le nombre à trouver était " + numberToFind +" .<br/>");
  }
}
