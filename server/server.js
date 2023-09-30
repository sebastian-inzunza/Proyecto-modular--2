// const mysql = require("mysql");
// const cors = require("cors");
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");
// const http = require("http");
// const socketIO = require("socket.io");

// const app = express();

// app.use(express.json());

// app.use(cookieParser());

// const server = http.createServer(app);

// app.use(
//     cors({
//         origin: "http://localhost:5173",
//         methods: ["POST, GET"],
//         credentials: true,
//     })
// );

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "modular",
// });

// const io = socketIO(server);

// const verifyUser = (req, res, next) => {
//     const token = req.cookies.token;

//     if (!token) {
//         return res.json({ Message: "Necesitas token" });
//     } else {
//         jwt.verify(token, "prueba", (err, decoded) => {
//             if (err) {
//                 return res.json({ Message: "Error de autentificacion" });
//             } else {
//                 console.log(req.name)
//                 req.name = decoded.name;
//                 next();
//             }
//         });
//     }
// };

// const insertData = (req, res) => {
//     // Aquí puedes acceder a los datos enviados desde el frontend en req.body
//     const { nombre, correo, contrasena } = req.body;
//     console.log(req.body)

//     // Lógica de inserción de datos en tu base de datos o cualquier otra operación
//     const sql = "INSERT INTO users (nombre, mail, pass) VALUES (?, ?,?)";
//     const values = [nombre, correo, contrasena];
//     db.query(sql, values, (error, results) => {
//         if (error) {
//             console.error("Error al insertar los datos:", error);
//             res.status(500).json({ error: "Error al insertar los datos" });
//         } else {
//             res.status(200).json({ message: "Datos insertados correctamente" });
//         }
//     });
// };

// const insertApuesta = (req, res) => {
//     // Aquí puedes acceder a los datos enviados desde el frontend en req.body
//     const { nombre, correo, contrasena } = req.body;
//     console.log(req.body)

//     // Lógica de inserción de datos en tu base de datos o cualquier otra operación
//     const sql = "INSERT INTO users (nombre, mail, pass) VALUES (?, ?,?)";
//     const values = [nombre, correo, contrasena];
//     db.query(sql, values, (error, results) => {
//         if (error) {
//             console.error("Error al insertar los datos:", error);
//             res.status(500).json({ error: "Error al insertar los datos" });
//         } else {
//             res.status(200).json({ message: "Datos insertados correctamente" });
//         }
//     });
// };

// const insertDataEstadistica = (req, res) => {
//     // // Aquí puedes acceder a los datos enviados desde el frontend en req.body
//     const { statisticsId, eventId, localGoals, visitGoals, localShoots, visitShoots, localFouls, visitFouls, result } = req.body;
//     console.log(req.body)

//     // Lógica de inserción de datos en tu base de datos o cualquier otra operación
//     const sql = "INSERT INTO statistics (statisticsId, eventId, localGoals,visitGoals,localShoots,visitShoots, localFouls, visitFouls,result  ) VALUES (?,?,?,?,?,?,?,?,?)";
//     const values = [statisticsId, eventId, localGoals, visitGoals, localShoots, visitShoots, localFouls, visitFouls, result ];
//     db.query(sql, values, (error, results) => {
//         if (error) {
//             console.error("Error al insertar los datos:", error);
//             res.status(500).json({ error: "Error al insertar los datos" });
//         } else {
//             res.status(200).json({ message: "Datos insertados correctamente" });
//         }
//     });
// };

// app.post("/registerUser", insertData);
// app.post("/insertEstadistica", insertDataEstadistica);

// app.get('/getEventos', (req, res) => {
//     // Realiza la consulta a la base de datos MySQL
//     db.query('SELECT * FROM events', (err, resultados) => {
//       if (err) {
//         console.error('Error al realizar la consulta:', err);
//         res.status(500).json({ error: 'Error al obtener eventos' });
//       } else {
//         // Devuelve los resultados como respuesta en formato JSON
//         res.json(resultados);
//         console.log(resultados)
//       }
//     });
//   });

// app.get("/prueba", verifyUser, (req, res) => {
//     console.log(res)
//     return res.json({ Status: "Success", name: req.name });
// });

// app.get("/logout", (req, res) => {
//     console.log("entre")
//     res.clearCookie("token");
//     res.clearCookie("name");
//     res.clearCookie("balance");
//     res.clearCookie("level");
//     return res.json({ Status: "Success" });
// });

// app.post("/login", (req, res) => {
//     console.log(req.body.name)
//     const sql = "select * from users where username = ? and passwordHash = ?";
//     db.query(sql, [req.body.name, req.body.password], (err, data) => {
//         if (err) return res.json({ Message: "server side error" });
//         if (data.length > 0) {
//             const name = data[0].username;
//             const userLevel = data[0].userLevel
//             const balance = data[0].balance

//             const token = jwt.sign({ name }, "prueba", { expiresIn: "1d" });
//             res.cookie("token", token);
//             res.cookie("level", userLevel)
//             res.cookie("name", name)
//             res.cookie("balance", balance)

//             return res.json({ Status: "Success", Level: userLevel, Name: name, Balance: balance});
//         } else {
//             res.json({ Message: "No records existed" });
//         }
//     });
// });

// app.listen(8081, () => {
//     console.log("Running");
// });

const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const http = require("http");
const socketIO = require("socket.io");
const bcrypt = require("bcrypt");

const saltRounds = 10; // Cost factor for bcrypt (may vary)

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "modular",
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ Message: "Necesitas token" });
  } else {
    jwt.verify(token, "prueba", (err, decoded) => {
      if (err) {
        return res.json({ Message: "Error de autenticación" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};
const insertData = (req, res) => {
  const { correo, contrasena } = req.body;

  bcrypt.hash(contrasena, saltRounds, function (err, hash) {
    if (err) {
      console.log("Hubo un error en la contraseña");
      res.status(500).json({ error: "Error al hashear la contraseña" });
    } else {
      const sql =
        "INSERT INTO users (username, passwordHash, balance, userLevel, deposit, withdraw) VALUES (?, ?, 0, 1, 0, 0)";
      const values = [correo, hash]; // Pasa el hash en lugar de la contraseña en texto claro
      db.query(sql, values, (error, results) => {
        if (error) {
          console.error("Error al insertar los datos:", error);
          res.status(500).json({ error: "Error al insertar los datos" });
        } else {
          res.status(200).json({ message: "Datos insertados correctamente" });
        }
      });
    }
  });
};



const inserApuesta = (req, res) => {
  const { userId, eventId, amount, outcome } = req.body;

  db.query(
    "SELECT balance FROM users WHERE userId = ?",
    [userId],
    (error, resultados) => {
      if (error) {
        console.error("Error al seleccionar la cantidad actual:", error);
        // Maneja el error
      } else {
        const cantidadActual = resultados[0].balance; // Obtén la cantidad actual desde la consulta
        const nuevaCantidad = cantidadActual - parseInt(amount); // Suma la cantidad actual con la cantidad agregada

        console.log(nuevaCantidad)
        // Actualiza la cantidad en la base de datos
        db.query(
          "UPDATE users SET balance = ? WHERE userId = ?",
          [nuevaCantidad, userId],
          (error, resultados) => {
            if (error) {
              console.error("Error al actualizar la cantidad:", error);
              // Maneja el error
            } else {
              console.log("Cantidad actualizada correctamente");
            }
          }
        );
      }
    }
  )
    
      const sql =
        "INSERT INTO bets (userId, eventId, amount, outcome) VALUES (?, ?, ?, ?)";
      const values = [userId, eventId, amount, outcome]; // Pasa el hash en lugar de la contraseña en texto claro
      db.query(sql, values, (error, results) => {
        if (error) {
          console.error("Error al insertar los datos:", error);
          res.status(500).json({ error: "Error al insertar los datos" });
        } else {
          res.status(200).json({ message: "Datos insertados correctamente" });
        }
      });
   }


const insertPayMethod = (req, res) => {
  const { cardNumber, cvv, dateExpire, idUser } = req.body;

  const sql =
    "INSERT INTO paymentmethods (userId, cardNumber, expirationDate, cvv) VALUES (?, ?,?,?)";
  const values = [idUser, cardNumber, dateExpire, cvv];
  db.query(sql, values, (error, results) => {
    if (error) {
      console.error("Error al insertar los datos:", error);
      res.status(500).json({ error: "Error al insertar los datos" });
    } else {
      res.status(200).json({ message: "Datos insertados correctamente" });
    }
  });

  const sql2 = "UPDATE users SET paymethod = 1 WHERE userId = ?";
  const values2 = [idUser];
  db.query(sql2, values2, (error, results) => {
    if (error) {
      console.error("Error al insertar los datos:", error);
      res.status(500).json({ error: "Error al insertar los datos" });
    } else {
      res.status(200).json({ message: "Datos insertados correctamente" });
    }
  });
};

const insertDataEstadistica = (req, res) => {
  const {
    statisticsId,
    eventId,
    localGoals,
    visitGoals,
    localShoots,
    visitShoots,
    localFouls,
    visitFouls,
    result,
  } = req.body;

  const sql =
    "INSERT INTO statistics (statisticsId, eventId, localGoals, visitGoals, localShoots, visitShoots, localFouls, visitFouls, result) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    statisticsId,
    eventId,
    localGoals,
    visitGoals,
    localShoots,
    visitShoots,
    localFouls,
    visitFouls,
    result,
  ];
  db.query(sql, values, (error, results) => {
    if (error) {
      console.error("Error al insertar los datos:", error);
      res.status(500).json({ error: "Error al insertar los datos" });
    } else {
      res.status(200).json({ message: "Datos insertados correctamente" });
    }
  });
};

app.post("/insertApuesta", inserApuesta);
app.post("/registerUser", insertData);
app.post("/insertEstadistica", insertDataEstadistica);
app.post("/updateCBalance", insertPayMethod);

app.get("/getEventos", (req, res) => {
  db.query("SELECT * FROM events", (err, resultados) => {
    if (err) {
      console.error("Error al realizar la consulta:", err);
      res.status(500).json({ error: "Error al obtener eventos" });
    } else {
      res.json(resultados);
    }
  });
});

app.get("/prueba", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("name");
  res.clearCookie("balance");
  res.clearCookie("level");
  console.log(res.json);
  return res.json({ Status: "Success" });
});

app.post("/login", (req, res) => {
  const username = req.body.name;
  const password = req.body.password;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], async (err, data) => {
    if (err) {
      return res.json({ Message: "Error del lado del servidor" });
    }

    if (data.length > 0) {
      const storedHash = data[0].passwordHash;

      // Compara la contraseña proporcionada con el hash almacenado
      const passwordMatch = await bcrypt.compare(password, storedHash);

      if (passwordMatch) {
        const name = data[0].username;
        const userLevel = data[0].userLevel;
        const balance = data[0].balance;
        const userId = data[0].userId;

        // Genera un token de autenticación con JWT
        const token = jwt.sign({ name }, "prueba", { expiresIn: "1d" });

        // Configura las cookies con la información del usuario
        res.cookie("token", token);
        res.cookie("level", userLevel);
        res.cookie("name", name);
        res.cookie("balance", balance);
        res.cookie("id", userId);

        return res.json({
          Status: "Success",
          Level: userLevel,
          Name: name,
          Balance: balance,
        });
      } else {
        return res.json({ Message: "Credenciales incorrectas" });
      }
    } else {
      return res.json({ Message: "No existen registros" });
    }
  });
});

app.post("/metodoPago", (req, res) => {
  const { idUser } = req.body;
  // Ejecuta una consulta SQL para seleccionar el método de pago del usuario
  db.query(
    "SELECT paymethod FROM users WHERE userId = ?",
    [idUser],
    (error, resultados) => {
      if (error) {
        console.error("Error al seleccionar los datos:", error);
        res.status(500).json({ error: "Error al seleccionar los datos" });
      } else {
        if (resultados.length > 0) {
          const metodo = resultados[0].paymethod;
          console.log("Método de pago:", metodo);
          res.status(200).json({ metodo });
        } else {
          console.log("Usuario no encontrado");
          res.status(404).json({ error: "Usuario no encontrado" });
        }
      }
    }
  );
});

app.post("/saldoUsuario", (req, res) => {
  const { idUser } = req.body;

  // Realiza una consulta a la base de datos para obtener el saldo del usuario.
  const sql = "SELECT balance FROM users WHERE userId = ?";
  db.query(sql, [idUser], (error, results) => {
    if (error) {
      console.error("Error al obtener el saldo del usuario:", error);
      res.status(500).json({ error: "Error al obtener el saldo del usuario" });
    } else {
      if (results.length > 0) {
        const saldo = results[0].balance;
        res.status(200).json({ saldo });
      } else {
        res.status(404).json({ error: "Usuario no encontrado" });
      }
    }
  });
});

app.post("/addFondos", (req, res) => {
  const { idUser, balance } = req.body;
  // Ejecuta una consulta SQL para seleccionar el método de pago del usuario
  db.query(
    "SELECT balance FROM users WHERE userId = ?",
    [idUser],
    (error, resultados) => {
      if (error) {
        console.error("Error al seleccionar la cantidad actual:", error);
        // Maneja el error
      } else {
        const cantidadActual = resultados[0].balance; // Obtén la cantidad actual desde la consulta
        const nuevaCantidad = cantidadActual + parseInt(balance); // Suma la cantidad actual con la cantidad agregada

        // Actualiza la cantidad en la base de datos
        db.query(
          "UPDATE users SET balance = ? WHERE userId = ?",
          [nuevaCantidad, idUser],
          (error, resultados) => {
            if (error) {
              console.error("Error al actualizar la cantidad:", error);
              // Maneja el error
            } else {
              console.log("Cantidad actualizada correctamente");
              res.status(200).json({ status: "OK" });
            }
          }
        );
      }
    }
  );
});

app.get("/seleccionar-datos", (req, res) => {
  // Ejecuta una consulta SQL para seleccionar todos los datos de la tabla
  db.query("SELECT * FROM events", (error, resultados) => {
    if (error) {
      console.error("Error al seleccionar los datos:", error);
      res.status(500).json({ error: "Error al seleccionar los datos" });
    } else {
      // Envia los resultados al cliente
      res.json(resultados);

      // Emite los resultados a través de Socket.io para actualizar el cliente
      io.emit("datos_actualizados", resultados);
      console.log("entre");
    }
  });
});

app.post("/insertar", (req, res) => {
  const {
    eventName,
    eventDate,
    oddsLocalTeam,
    oddsVisitTeam,
    oddsDraw,
    nombreLocal,
    nombreVisitante,
    informacionEnviada,
    icon,
  } = req.body;
  console.log(eventName);

  const sql =
    "INSERT INTO events ( eventName, eventDate, oddsLocalTeam, oddsVisitTeam, oddsDraw, nombreLocal, nombreVisitante, informacionEnviada,icon) VALUES ( ?,?,?,?,?,?,?,?,?)";

  const values = [
    eventName,
    eventDate,
    oddsLocalTeam,
    oddsVisitTeam,
    oddsDraw,
    nombreLocal,
    nombreVisitante,
    informacionEnviada,
    icon,
  ];

  db.query(sql, values, (error, results) => {
    if (error) {
      console.error("Error al insertar los datos:", error);
      res.status(500).json({ error: "Error al insertar los datos" });
    } else {
      // Supongamos que aquí realizas una consulta para obtener todos los datos de la tabla.
      // Debes adaptar esta consulta según la estructura de tu base de datos y tecnología utilizada.
      const sqlSelectAll = "SELECT * FROM events";

      db.query(sqlSelectAll, (errorSelect, resultsSelect) => {
        if (errorSelect) {
          console.error("Error al seleccionar los datos:", errorSelect);
          res.status(500).json({ error: "Error al seleccionar los datos" });
        } else {
          // Emitir un evento a todos los clientes conectados con todos los datos
          res.redirect("/seleccionar-datos");
        }
      });
    }
  });
});

io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.emit("evento_personalizado", { message: "Hola cliente" });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(8081, () => {
  console.log("Servidor en ejecución en el puerto 8081");
});
