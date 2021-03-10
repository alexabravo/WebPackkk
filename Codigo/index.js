import Inicio from "../img/Inicio.jpg";
import intro from "../musica/intro.mp3";

const divTitulo = document.createElement("div");

const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "FATE";
divTitulo.appendChild(titulo);

const subtitulo = document.createElement("h2");
subtitulo.id = "subtitulo";
subtitulo.innerText = "The Winx Saga";
divTitulo.appendChild(subtitulo);

const espacio = document.createElement("hr");
divTitulo.appendChild(espacio);

const imagen = document.createElement("img");
imagen.src = Inicio;
imagen.width = "1000";
divTitulo.appendChild(imagen); 

const cancion = document.createElement("audio");
cancion.controls = true;

const intromusica = document.createElement("source");
intromusica.src = intro; 
intromusica.type = "audio/ogg";
cancion.appendChild(intromusica);
divTitulo.appendChild(cancion); 

const parrafo = document.createElement("p");
parrafo.id = "parrafo";
parrafo.innerText = "SINOPSIS: Serie de TV (2021). 6 episodios. Destino: La saga Winx sigue el día a día de cinco hadas que empiezan a estudiar en Alfea, un internado en el que aprenderán a dominar sus poderes mágicos además de enfrentarse a problemas más terrenales como el amor, la rivalidad y unos monstruos que amenazan su existencia. Del creador Brian Young, Destino: La saga Winx es una reinvención en acción real de la serie italiana de dibujos animados WINX CLUB de Iginio Straffi.";
divTitulo.appendChild(parrafo);

document.getElementById("introbody").appendChild(divTitulo);