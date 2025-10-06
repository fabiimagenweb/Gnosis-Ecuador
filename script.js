const libros = [
  { titulo: "Introducción a la Gnosis", autor: "Samael Aun Weor" },
  { titulo: "El Matrimonio Perfecto", autor: "Samael Aun Weor" },
  { titulo: "La Revolución de la Dialéctica", autor: "Samael Aun Weor" },
];

function mostrarInicio() {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("biblioteca").style.display = "none";
}

function mostrarBiblioteca() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("biblioteca").style.display = "block";
}

function buscarLibro() {
  const query = document.getElementById("search").value.toLowerCase();
  const resultado = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(query) ||
    libro.autor.toLowerCase().includes(query)
  );

  const lista = document.getElementById("lista-libros");
  lista.innerHTML = "";

  if (resultado.length === 0) {
    lista.innerHTML = "<li>No se encontraron resultados.</li>";
  } else {
    resultado.forEach(libro => {
      const item = document.createElement("li");
      item.textContent = `${libro.titulo} — ${libro.autor}`;
      lista.appendChild(item);
    });
  }
}
