const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, "src", "assets", "people.json");

// GET: devolver el JSON
app.get("/api/people", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return res.status(500).json({ error: "Error al leer el archivo" });
    }
    res.json(JSON.parse(data));
  });
});

// POST: agregar una persona
app.post("/api/people", (req, res) => {
  const nuevaPersona = req.body;

  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return res.status(500).json({ error: "Error al leer el archivo" });
    }

    const personas = JSON.parse(data);
    const maxId = personas.reduce((max, persona) => (persona.id > max ? persona.id : max), 0);
    nuevaPersona.id = maxId + 1;
    nuevaPersona.edad = parseInt(nuevaPersona.edad);
    personas.push(nuevaPersona);

    fs.writeFile(dataPath, JSON.stringify(personas, null, 2), (err) => {
      if (err) {
        console.error("Error al escribir el archivo:", err);
        return res.status(500).json({ error: "Error al guardar los datos" });
      }

      res.status(201).json({ mensaje: "Persona agregada con éxito" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
