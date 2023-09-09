let biblioteca = [];

function nuevoLibro(titulo, autor, genero, año) {
  let libro = {
    titulo: titulo,
    autor: autor,
    genero: genero,
    año: año,
  };
  return biblioteca.push(libro);
}

function listaLibros() {
  for (let i = 0; i < biblioteca.length; i++) {
    const libro = biblioteca[i];
    console.log(libro);
  }
}

function buscarLibroPorTitulo(titulo) {
  for (let i = 0; i < biblioteca.length; i++) {
    const libro = biblioteca[i];
    if (libro.titulo.toLowerCase() === titulo.toLowerCase()) {
      console.log(libro);
    }
  }
}

function contadorDeGenero(genero) {
  let contador = 0;
  for (let i = 0; i < biblioteca.length; i++) {
    const libro = biblioteca[i];
    if (libro.genero.toLowerCase() === genero.toLowerCase()) {
      contador++;
    }
  }
  console.log(contador + " libros encontrados con el genero " + genero);
}

nuevoLibro("inmortales", "German Forero", "fantasia", 2010);
nuevoLibro("juan la m", "German Forero", "fantasia", 2010);
nuevoLibro("lazos de sangre", "German Forero", "accion", 2010);

console.log(contadorDeGenero("fantasia"));
