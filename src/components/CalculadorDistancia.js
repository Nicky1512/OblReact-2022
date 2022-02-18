import { getDistance } from "geolib";

const calcularDistancia = (origenID, destinoID, ciudades) => {
  
  
  
    const distance = getDistance(
     
      {
        latitude: (ciudades.find(ciudad => ciudad.id === parseInt(origenID))).latitud,
        longitude: (ciudades.find(ciudad => ciudad.id === parseInt(origenID))).longitud,
      },
      {
        latitude: (ciudades.find(ciudad => ciudad.id === parseInt(destinoID))).latitud,
        longitude: (ciudades.find(ciudad => ciudad.id === parseInt(destinoID))).longitud,
      } 
    );

    return distance / 1000;

};

export {calcularDistancia}