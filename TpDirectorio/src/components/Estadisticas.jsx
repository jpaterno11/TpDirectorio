import personas from "../assets/people.json";
import { Container, Card, ListGroup } from "react-bootstrap";

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
    <Container className="my-4 d-flex justify-content-center">
      <Card style={{ width: '22rem' }}>
        <Card.Header as="h4" className="text-center">
          Estadísticas del grupo
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Total de personas:</strong> {CantPersonas}</ListGroup.Item>
          <ListGroup.Item><strong>Personas mayores de 35 años:</strong> {cantMas35}</ListGroup.Item>
          <ListGroup.Item><strong>Personas de 35 años o menos:</strong> {cantMenos35}</ListGroup.Item>
          <ListGroup.Item><strong>Personas mayores de edad:</strong> {cantMayorEdad}</ListGroup.Item>
          <ListGroup.Item><strong>Personas menores de edad:</strong> {cantMenorEdad}</ListGroup.Item>
          <ListGroup.Item><strong>Edad promedio:</strong> {promedioEdades} años</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}
  
  export default Estadisticas;
  