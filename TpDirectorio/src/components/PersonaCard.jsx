import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import personas from "../assets/people.json";



function PersonaCard() {
  const { id } = useParams();
  const persona = personas.find(p => p.id === parseInt(id));

  if (!persona) return <p>Persona no encontrada</p>;
  else
  {
  let condicionEdad;
  if (persona.edad >= 18) { condicionEdad = "Mayor de edad" } else { condicionEdad = "Menor de edad" }
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{persona.nombre}</Card.Title>
          <Card.Text>
            <ul>
            <li>Nombre Completo: {persona.nombre} {persona.apellido}</li>
            <li>Email: {persona.email}</li>
            <li>Edad: {persona.edad} años ({condicionEdad})</li>
            
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default PersonaCard;