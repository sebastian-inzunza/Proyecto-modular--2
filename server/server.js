const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["POST, GET"],
        credentials: true,
    })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "modular",
});

// const verifyUser = (req, res, next) => {
//     const token = req.cookies.token;

//     if (!token) {
//         return res.json({ Message: "Necesitas token" });
//     } else {
//         jwt.verify(token, "prueba", (err, decoded) => {
//             if (err) {
//                 return res.json({ Message: "Error de autentificacion" });
//             } else {
//                 req.name = decoded.name;
//                 next();
//             }
//         });
//     }
// };

const insertData = (req, res) => {
    // Aquí puedes acceder a los datos enviados desde el frontend en req.body
    const { nombre, correo, contrasena } = req.body;
    console.log(req.body)

    // Lógica de inserción de datos en tu base de datos o cualquier otra operación
    const sql = "INSERT INTO users (nombre, mail, pass) VALUES (?, ?,?)";
    const values = [nombre, correo, contrasena];
    db.query(sql, values, (error, results) => {
        if (error) {
            console.error("Error al insertar los datos:", error);
            res.status(500).json({ error: "Error al insertar los datos" });
        } else {
            res.status(200).json({ message: "Datos insertados correctamente" });
        }
    });
};


    // Lógica de inserción de datos en tu base de datos o cualquier otra operación
    // const sql = "INSERT INTO prueba (nombre, edad) VALUES (?, ?)";
    // const values = [name, age];
    // db.query(sql, values, (error, results) => {
    //     if (error) {
    //       console.error('Error al insertar los datos:', error);
    //       res.status(500).json({ error: 'Error al insertar los datos' });
    //     } else {
    //       res.status(200).json({ message: 'Datos insertados correctamente' });
    //     }
    //   });


app.post("/registerUser", insertData);

// app.get("/", verifyUser, (req, res) => {
//     return res.json({ Status: "Success", name: req.name });
// });

// app.get("/logout", (req, res) => {
//     res.clearCookie("token");
//     return res.json({ Status: "Success" });
// });

// app.post("/login", (req, res) => {
//     const sql = "select * from login where email = ? and password = ?";
//     db.query(sql, [req.body.email, req.body.password], (err, data) => {
//         if (err) return res.json({ Message: "server side error" });
//         if (data.length > 0) {
//             const name = data[0].name;
//             const token = jwt.sign({ name }, "prueba", { expiresIn: "1d" });
//             res.cookie("token", token);
//             return res.json({ Status: "Success" });
//         } else {
//             res.json({ Message: "No records existed" });
//         }
//     });
// });

app.listen(8081, () => {
    console.log("Running");
});
