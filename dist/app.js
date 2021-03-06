import express from "express"; // import { auth } from "../middelware/auth";

const cors = require('cors');

const morgan = require("morgan");

const app = express(); // Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan('dev')); // Rutas publicas
// app.use(userRoutes);
// // Rutas protegidas
// app.use(auth);
// app.use(gruposRoutes);
// app.use(acuerdosRoutes);

export default app;