export default (errorType) => {
  switch (errorType) {
    case 'Too many results.':
      return 'Demasiadas peliculas disponibles, por favor ingresa una busqueda mas detallada';
    case 'Movie not found!':
      return 'Pelicula no encontrada, por favor ingresa una nueva busqueda';
    default:
      return 'Error interno en el sistema';
  }
};
