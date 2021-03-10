import Lucifer from '../img/Lucifer.jpg';
import River from '../img/riverdale.jpg';

const divTitulo = document.createElement("div");

const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Titulos Similares";
divTitulo.appendChild(titulo);

const subtitulo = document.createElement("h2");
subtitulo.id = "subtitulo";
subtitulo.innerText = "Segun la recomendación de Netflix";
divTitulo.appendChild(subtitulo);

const opcion1 = document.createElement("h3");
opcion1.id = "opcion1";
opcion1.innerText = "Lucifer";
divTitulo.appendChild(opcion1);

const parrafo1 = document.createElement("p");
parrafo1.id = "parrafo";
parrafo1.innerText = "Es el diablo pero no le tengas rencor. Tambien ayuda a resolver asesinatos y maneja un club nocturno.";
divTitulo.appendChild(parrafo1);

const l = document.createElement("a");
l.href = "https://www.youtube.com/watch?v=3mTh2joPPj8";
l.innerText = "Trailer Oficial";
parrafo1.appendChild(l);
divTitulo.appendChild(parrafo1);

const lucifer = document.createElement("img");
lucifer.src = Lucifer;
lucifer.width = "500";
parrafo1.appendChild(lucifer); 
divTitulo.appendChild(parrafo1);

const opcion2 = document.createElement("h4");
opcion2.id = "opcion2";
opcion2.innerText = "Riverdale";
divTitulo.appendChild(opcion2);

const parrafo2 = document.createElement("p");
parrafo2.id = "parrafo2";
parrafo2.innerText = "Archie tiene audacia; Veronica tiene mala fama; Betty tiene agallas y Jughead tiene actitud.";
divTitulo.appendChild(parrafo2);

const r = document.createElement("a");
r.href = "https://www.youtube.com/watch?v=HxtLlByaYTc";
r.innerText = "Trailer Oficial";
parrafo2.appendChild(r);
divTitulo.appendChild(parrafo2);

const river = document.createElement("img");
river.src = River;
river.width = "500";
parrafo2.appendChild(river); 
divTitulo.appendChild(parrafo2);

document.getElementById("titbody").appendChild(divTitulo);