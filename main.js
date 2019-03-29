function affiche(){
  setTimeout(opening, 5000);
}

function opening(){
  if (confirm("Hey le site xxxvidsxxx est trop bien. Veux-tu y aller ?")){
   window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } 
}
  


document.getElementById('changeMode').onclick = psychedelique;

var paragraphe = document.querySelectorAll('p');
var couleur = document.querySelector('body');
var couleurHeading = document.querySelectorAll('h1, h2, h3, h4');


function psychedelique(){
// Paragraphes
	for(var p = 0; p < paragraphe.length; p++){
		paragraphe[p].style.color = 'blue';
		paragraphe[p].style.fontFamily = 'papyrus';
	};
// tout les titres H1, H2, H3, H4
	for(var h = 0; h < couleurHeading.length; h++){
		couleurHeading[h].style.color = 'green';
		couleurHeading[h].style.fontFamily = 'comic sans MS';
	};
//couleur de fond du body
	couleur.style.backgroundColor = 'magenta';
}