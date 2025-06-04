import personas from "../assets/people.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import "./home.css"

function Home() {
  return (
    <ul className="parent" style={{ listStyleType: "none" }}>
      {personas.map((persona) => (
        <li className="" key={persona.id}>
          <Card style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Body>
              <Card.Title>{persona.nombre} {persona.apellido}</Card.Title>
              <Card.Text>{persona.edad} años</Card.Text>
              <Button variant="primary" as={NavLink} to={`/persona/${persona.id}`}>Ver más</Button>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default Home;
