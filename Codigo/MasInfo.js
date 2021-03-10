import trailer from '../musica/trailer.mp4'

const divTitulo = document.createElement("div");

const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "MAS INFORMACION";
divTitulo.appendChild(titulo);

const subtitulo = document.createElement("h2");
subtitulo.id = "subtitulo";
subtitulo.innerText = "The Winx Saga";
divTitulo.appendChild(subtitulo);

const trailer = document.createElement("video");
trailer.id = "trailer";
trailer.src = trailer;
video.width = "520";
video.height = "440";
video.autoplay = true; 
video.appendChild(trailer);

const espacio = document.createElement("hr");
divTitulo.appendChild(espacio);

const creada = document.createElement("p");
creada.id = "creada";
creada.innerText = "Creada por: ";
divTitulo.appendChild(creada);

const creador = document.createElement("a");
creador.href = "https://fatethewinxsaga.fandom.com/wiki/Brian_Young";
creador.innerText = "Brian Young";

const elenco = document.createElement("p");
elenco.id = "elenco";
elenco.innerText = "Elenco: ";
divTitulo.appendChild(elenco);

const listaelenco = document.createElement("ul")
listaelenco.id="listaelenco";
divTitulo.appendChild(listaelenco);

const abi= document.createElement("li");
abi.innerText = "Abigail Cowen"
const abiIG = document.createElement("a");
abiIG.href = "https://www.instagram.com/abbeycowen/";
abiIG.innerText = "Instragram";
abi.appendChild(abiIG);
listaelenco.appendChild(abi);
const abiInfo = document.createElement("a");
abiInfo.href = "https://www.marieclaire.com/culture/a35366335/who-is-abigail-cowen-fate-the-winx-saga/";
abiInfo.innerText = "Mas Informacion";
abi.appendChild(abiInfo);
listaelenco.appendChild(abi);

const hannah= document.createElement("li");
hannah.innerText = "Hannah van der Westhuysen"
const hannahIG = document.createElement("a");
hannahIG.href = "https://www.instagram.com/hannahvdw/";
hannahIG.innerText = "Instragram";
hannah.appendChild(hannahIG);
listaelenco.appendChild(hannah);

const pre= document.createElement("li");
pre.innerText = "Precious Mustapha"
const preIG = document.createElement("a");
preIG.href = "https://www.instagram.com/preciousmustaph/";
preIG.innerText = "Instragram";
pre.appendChild(preIG);
listaelenco.appendChild(pre);

const salt = document.createElement("li");
salt.innerText = "Eliot Salt"
const saltIG = document.createElement("a");
saltIG.href = "https://www.instagram.com/eliotmsalt/";
saltIG.innerText = "Instragram";
salt.appendChild(saltIG);
listaelenco.appendChild(salt);

const eli = document.createElement("li");
eli.innerText = "Elisha Applebaum"
const eliIG = document.createElement("a");
eliIG.href = "https://www.instagram.com/elisha_applebaum/";
eliIG.innerText = "Instragram";
eli.appendChild(eliIG);
listaelenco.appendChild(eli);

const dan = document.createElement("li");
dan.innerText = "Danny Griffin"
const danIG = document.createElement("a");
danIG.href = "https://www.instagram.com/danny_griffin/";
danIG.innerText = "Instragram";
dan.appendChild(danIG);
listaelenco.appendChild(dan);

const sad = document.createElement("li");
sad.innerText = "Sadie Soverall"
const sadIG = document.createElement("a");
sadIG.href = "https://www.instagram.com/sadiesoverall/";
sadIG.innerText = "Instragram";
sad.appendChild(sadIG);
listaelenco.appendChild(sad);

const fred = document.createElement("li");
fred.innerText = "Freddie Thorp"
const fredIG = document.createElement("a");
fredIG.href = "https://www.instagram.com/freddiethorp/";
fredIG.innerText = "Instragram";
fred.appendChild(fredIG);
listaelenco.appendChild(fred);

const rob = document.createElement("li");
rob.innerText = "Rob James-Collier"
const robIG = document.createElement("a");
robIG.href = "https://en.wikipedia.org/wiki/Robert_James-Collier";
robIG.innerText = "Mas Info";
rob.appendChild(robIG);
listaelenco.appendChild(rob);

const eve = document.createElement("li");
eve.innerText = "Eve Best"
const eveIG = document.createElement("a");
eveIG.href = "https://en.wikipedia.org/wiki/Eve_Best";
eveIG.innerText = "Mas Info";
eve.appendChild(eveIG);
listaelenco.appendChild(eve);

const les = document.createElement("li");
les.innerText = "Lesley Sharp"
const lesIG = document.createElement("a");
lesIG.href = "https://en.wikipedia.org/wiki/Lesley_Sharp";
lesIG.innerText = "Mas Info";
les.appendChild(lesIG);
listaelenco.appendChild(les);

const genero = document.createElement("p");
genero.id = "genero";
genero.innerText = "Genero: Series de Fantasia, Series de adolescentes y Dramas de TV ";
divTitulo.appendChild(genero);

const tipo = document.createElement("p");
tipo.id = "tipo";
tipo.innerText = "Este titulo es: Emotivo ";
divTitulo.appendChild(tipo);

const edad = document.createElement("p");
edad.id = "edad";
edad.innerText = "Clasificacion por Edad: 16+ Contiene lenguaje inapropiado ";
divTitulo.appendChild(edad);

document.getElementById("infobody").appendChild(divTitulo);
document.getElementById("infobody").appendChild(listaelenco);