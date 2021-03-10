const divTitulo = document.createElement("div");

const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Benefits of Learning UX Design";
divTitulo.appendChild(titulo);

const parrafo1 = document.createElement("p");
parrafo1.id = "parrafo";
parrafo1.innerText = "El UX es una parte fundamental al momento de desarrollar un producto porque es importante conocer al cliente para poder realizar algo que cumpla con sus expectativas, sea facil de usar y cumpla con su objetivo. Es importante tomarlo en cuenta porque asi como dicen en el video tener un buen UX ayuda a incrementar las ganancias.";
divTitulo.appendChild(parrafo1);

const parrafo2 = document.createElement("p");
parrafo2.id = "parrafoo";
parrafo2.innerText = "Tambien se mencionan tres de doce razones por la que los proyectos fallan y esas son que los requerimientos no estan bien definidos, hay poca comunicacion en tanto entre los miembros del equipo como con el cliente y las politicas y condiciones del cliente.";
divTitulo.appendChild(parrafo2);

const parrafo3 = document.createElement("p");
parrafo3.id = "parrafooo";
parrafo3.innerText = "Es muy importante conocer sobre el tema, ya que asi se logra obtener un servicio de calidad con mas ganancias que perdidas.";
divTitulo.appendChild(parrafo3);

document.getElementById("ux").appendChild(divTitulo);