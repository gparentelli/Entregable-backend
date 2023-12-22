import app from "./server";
import dotenv from "dotenv";
import mongoose from "mongoose";

//al .env lo usamos para guardar conexiones que no se deben de subir al repo
dotenv.config({ path: ".env" });

const port = process.env.PORT || 3000;
const connectionString = process.env.DB_CONNECTION;

//conexion a la base de datos
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Conectado a la base de datos");
  })

  .catch((error) => {
    console.log(`Error al conectar a la base de datos ${error}`);
  });

app.listen(port, () => {
  console.log(`example app listening on port ${port}!`);
});
