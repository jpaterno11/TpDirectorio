import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import personas from "../assets/people.json";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import "./persona.css"

function PersonaCard() {
  const { id } = useParams();
  const persona = personas.find(p => p.id === parseInt(id));
  if (!persona) return <p>Persona no encontrada</p>;
  else
  {
  let condicionEdad;
  if (persona.edad >= 18) { condicionEdad = "Mayor de edad" } else { condicionEdad = "Menor de edad" }
  return (
    <div>
      <Button className='botonVolver' variant="primary" as={NavLink} to={`/`}> <FaArrowLeft/> Volver </Button>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{persona.nombre}</Card.Title>
          <Card.Text>
            <ul>
            <li>Nombre Completo: <p className='p'>{persona.nombre} {persona.apellido}</p></li>
            <li>Email: <p className='p'>{persona.email}</p></li>
            <li>Edad: <p className='p'>{persona.edad} años ({condicionEdad})</p></li>
            
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default PersonaCard;