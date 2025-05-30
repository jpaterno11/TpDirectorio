import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./form.css"

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const [mensajes, setMensajes] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseñaA: "",
    contraseñaB: "",
    contraseñaC: "",
    confirmacion: "",
  });

  const [validaciones, setValidaciones] = useState({
    nombre: false,
    apellido: false,
    email: false,
    contraseñaA: false,
    contraseñaB: false,
    contraseñaC: false,
    confirmacion: false,
  });

  const validarNombre = (valor) => {
    const esValido = valor.length > 2;
    setMensajes((m) => ({ ...m, nombre: esValido ? "El nombre contiene al menos 3 caracteres" : "El nombre no contiene al menos 3 caracteres" }));
    setValidaciones((v) => ({ ...v, nombre: esValido }));
    return esValido;
  };

  const validarApellido = (valor) => {
    const esValido = valor.length > 2;
    setMensajes((m) => ({ ...m, apellido: esValido ? "El apellido contiene al menos 3 caracteres" : "El apellido no contiene al menos 3 caracteres" }));
    setValidaciones((v) => ({ ...v, apellido: esValido }));
    return esValido;
  };

  const validarEmail = (valor) => {
    const necesarios = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]+\.[a-zA-Z]{3,}$/;
    const esValido = necesarios.test(valor);
    setMensajes((m) => ({ ...m, email: esValido ? "El mail ingresado es válido" : "El mail no cumple con el formato válido" }));
    setValidaciones((v) => ({ ...v, email: esValido }));
    return esValido;
  };

  const validarContraseña = (valor) => {
    const mayuscula = /[A-Z]/.test(valor);
    const numero = /[0-9]/.test(valor);
    const largo = valor.length >= 8;
    setMensajes((m) => ({ ...m, contraseñaA: largo ? "Al menos 8 caracteres" : "Faltan caracteres", contraseñaB: mayuscula ? "Contiene mayúscula" : "Falta una mayúscula", contraseñaC: numero ? "Contiene número" : "Falta un número" }));
    setValidaciones((v) => ({ ...v, contraseñaA: largo, contraseñaB: mayuscula, contraseñaC: numero }));
    return largo && mayuscula && numero;
  };

  const validarConfirmacion = (valor) => {
    const esValido = valor === contraseña;
    setMensajes((m) => ({ ...m, confirmacion: esValido ? "Las contraseñas coinciden" : "Las contraseñas no coinciden" }));
    setValidaciones((v) => ({ ...v, confirmacion: esValido }));
    return esValido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreValido = validarNombre(nombre);
    const apellidoValido = validarApellido(apellido);
    const emailValido = validarEmail(email);
    const contraseñaValida = validarContraseña(contraseña);
    const confirmacionValida = validarConfirmacion(confirmarContraseña);
    if (nombreValido && apellidoValido && emailValido && contraseñaValida && confirmacionValida) {
      alert("Te registraste correctamente. ¡Bienvenido a bordo!");
    } else {
      alert("Verificá los datos. Algo está mal.");
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="nombre">
          <Form.Label>Ingrese su nombre:</Form.Label>
          <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => { setNombre(e.target.value); validarNombre(e.target.value); }} isValid={validaciones.nombre} isInvalid={nombre !== "" && !validaciones.nombre} />
          <div style={{ color: validaciones.nombre ? "green" : "red" }}>{mensajes.nombre}</div>
        </Form.Group>
        <Form.Group as={Col} controlId="apellido">
          <Form.Label>Ingrese su apellido:</Form.Label>
          <Form.Control type="text" placeholder="Apellido" value={apellido} onChange={(e) => { setApellido(e.target.value); validarApellido(e.target.value); }} isValid={validaciones.apellido} isInvalid={apellido !== "" && !validaciones.apellido} />
          <div style={{ color: validaciones.apellido ? "green" : "red" }}>{mensajes.apellido}</div>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="email">
          <Form.Label>Ingrese su email:</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); validarEmail(e.target.value); }} isValid={validaciones.email} isInvalid={email !== "" && !validaciones.email} />
          <div style={{ color: validaciones.email ? "green" : "red" }}>{mensajes.email}</div>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="contraseña">
          <Form.Label>Ingrese su contraseña:</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => { setContraseña(e.target.value); validarContraseña(e.target.value); }} isValid={validaciones.contraseñaA && validaciones.contraseñaB && validaciones.contraseñaC} isInvalid={contraseña !== "" && (!validaciones.contraseñaA || !validaciones.contraseñaB || !validaciones.contraseñaC)} />
          <div style={{ color: validaciones.contraseñaA ? "green" : "red" }}>{mensajes.contraseñaA}</div>
          <div style={{ color: validaciones.contraseñaB ? "green" : "red" }}>{mensajes.contraseñaB}</div>
          <div style={{ color: validaciones.contraseñaC ? "green" : "red" }}>{mensajes.contraseñaC}</div>
        </Form.Group>
        <Form.Group as={Col} controlId="confirmarContraseña">
          <Form.Label>Confirme su contraseña:</Form.Label>
          <Form.Control type="password" placeholder="Confirmar contraseña" value={confirmarContraseña} onChange={(e) => { setConfirmarContraseña(e.target.value); validarConfirmacion(e.target.value); }} isValid={validaciones.confirmacion} isInvalid={confirmarContraseña !== "" && !validaciones.confirmacion} />
          <div style={{ color: validaciones.confirmacion ? "green" : "red" }}>{mensajes.confirmacion}</div>
        </Form.Group>
      </Row>
      <Button type="submit" variant="primary">Enviar</Button>
    </Form>
  );
}

export default FormularioContacto;
