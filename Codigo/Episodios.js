import episodioImagen from '../img/ep.png';

const divTitulo = document.createElement("div");

const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "EPISODIOS";
divTitulo.appendChild(titulo);

const subtitulo = document.createElement("h2");
subtitulo.id = "subtitulo";
subtitulo.innerText = "The Winx Saga";
divTitulo.appendChild(subtitulo);

const imagen = document.createElement("img");
imagen.src = episodioImagen;
imagen.width = "1000";
divTitulo.appendChild(imagen); 

const listaEpisodios = document.createElement("ol");
listaEpisodios.id="listaEpisodios";
divTitulo.appendChild(listaEpisodios);

const primero = document.createElement("li");
const ep1 = document.createElement("a");
ep1.href = "1.html";
ep1.innerText = "Con un hada, de la mano";
primero.appendChild(ep1);
listaEpisodios.appendChild(primero);

const segundo = document.createElement("li");
const ep2 = document.createElement("a");
ep2.href = "2.html";
ep2.innerText = "Aquí no hay extraños";
segundo.appendChild(ep2);
listaEpisodios.appendChild(segundo);

const tercero = document.createElement("li");
const ep3 = document.createElement("a");
ep3.href = "3.html";
ep3.innerText = "Pesadas esperanzas mortales";
tercero.appendChild(ep3);
listaEpisodios.appendChild(tercero);

const cuarto = document.createElement("li");
const ep4 = document.createElement("a");
ep4.href = "4.html";
ep4.innerText = "Ángeles caídos";
cuarto.appendChild(ep4);
listaEpisodios.appendChild(cuarto);

const quinto = document.createElement("li");
const ep5 = document.createElement("a");
ep5.href = "5.html";
ep5.innerText = "Marchitarse en la verdad";
quinto.appendChild(ep5);
listaEpisodios.appendChild(quinto);

const sexto = document.createElement("li");
const ep6 = document.createElement("a");
ep6.href = "6.html";
ep6.innerText = "Un corazón fanático";
sexto.appendChild(ep6);
listaEpisodios.appendChild(sexto);

document.getElementById("episodiosbody").appendChild(divTitulo);
document.getElementById("episodiosbody").appendChild(listaEpisodios);