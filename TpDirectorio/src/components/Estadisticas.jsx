import Card from 'react-bootstrap/Card';
import personas from "../assets/people.json";

const CantPersonas = personas.length;
let cantMas35 = 0;
let cantMenos35 = 0;
let cantMayorEdad = 0;
let cantMenorEdad = 0;
let acumEdades = 0;
personas.forEach((persona) => {
  if (persona.edad > 35) {
    cantMas35++;
    cantMayorEdad++;
  } else {
    cantMenos35++;
    if (persona.edad >= 18) {
      cantMayorEdad++;
    } else {
      cantMenorEdad++;
    } 
  }
  acumEdades += persona.edad;
});
let promedioEdades = acumEdades / CantPersonas;

function Estadisticas() {
  return (
    <h1>{CantPersonas} {cantMas35} {cantMenos35} {cantMayorEdad} {cantMenorEdad} {promedioEdades}</h1> 
  );
  }
  
  export default Estadisticas;
  