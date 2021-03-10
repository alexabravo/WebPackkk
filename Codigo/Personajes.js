import bimagen from '../img/b.jpg';
import simagen from '../img/s.jpg';
import timagen from '../img/t.jpg';
import mimagen from '../img/m.jpg';
import aimagen from '../img/A.jpg';
import skimagen from '../img/sk.jpg';

const divTitulo = document.createElement("div");

const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "PERSONAJES";
divTitulo.appendChild(titulo);

const subtitulo = document.createElement("h2");
subtitulo.id = "subtitulo";
subtitulo.innerText = "The Winx Saga";
divTitulo.appendChild(subtitulo);

const listaPersonajes = document.createElement("ol");
listaPersonajes.id="listaPersonajes";
divTitulo.appendChild(listaPersonajes);

const Bloom = document.createElement("li");
Bloom = "Bloom: Hada de fuego"
const b = document.createElement("a");
b.href = "https://fatethewinxsaga.fandom.com/wiki/Bloom";
b.innerText = "Mas Información";
Bloom.appendChild(b);
listaEpisodios.appendChild(Bloom);

const bimagen = document.createElement("img");
bimagen.src = b;
bimagen.width = "300";
Bloom.appendChild(bimagen); 
listaPersonajes.appendChild(Bloom);

const stella = document.createElement("li");
stella = "Stella: Hada de Luz"
const s = document.createElement("a");
s.href = "https://fatethewinxsaga.fandom.com/wiki/Stella";
s.innerText = "Mas Información";
stella.appendChild(s);
listaEpisodios.appendChild(stella);

const simagen = document.createElement("img");
simagen.src = s;
simagen.width = "300";
stella.appendChild(simagen); 
listaPersonajes.appendChild(stella);

const terra = document.createElement("li");
terra = "Terra: Hada de la tierra"
const t = document.createElement("a");
t.href = "https://fatethewinxsaga.fandom.com/wiki/Terra_Harvey";
t.innerText = "Mas Información";
terra.appendChild(t);
listaEpisodios.appendChild(terra);

const timagen = document.createElement("img");
timagen.src = t;
timagen.width = "300";
terra.appendChild(timagen); 
listaPersonajes.appendChild(terra);

const musa = document.createElement("li");
musa = "Musa: Hada de la Mente"
const m = document.createElement("a");
m.href = "https://fatethewinxsaga.fandom.com/wiki/Musa";
m.innerText = "Mas Información";
musa.appendChild(m);
listaEpisodios.appendChild(musa);

const mimagen = document.createElement("img");
mimagen.src = m;
mimagen.width = "300";
musa.appendChild(mimagen); 
listaPersonajes.appendChild(musa);

const aisha = document.createElement("li");
aisha = "Aisha: Hada del agua"
const a = document.createElement("a");
a.href = "https://fatethewinxsaga.fandom.com/wiki/Aishav";
a.innerText = "Mas Información";
aisha.appendChild(a);
listaEpisodios.appendChild(aisha);

const aimagen = document.createElement("img");
aimagen.src = a;
aimagen.width = "300";
aisha.appendChild(aimagen); 
listaPersonajes.appendChild(aisha);

const sky = document.createElement("li");
sky = "Sky: Especialista"
const sk = document.createElement("a");
sk.href = "https://fatethewinxsaga.fandom.com/wiki/Sky";
sk.innerText = "Mas Información";
sky.appendChild(sk);
listaEpisodios.appendChild(sky);

const skimagen = document.createElement("img");
skimagen.src = sk;
skimagen.width = "300";
sky.appendChild(skimagen); 
listaPersonajes.appendChild(sky);

document.getElementById("perbody").appendChild(divTitulo);
document.getElementById("perbody").appendChild(listaPersonajes);