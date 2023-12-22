import express from "express";
import bodyParser from "body-parser";
import { handleError } from "../handlers/error.handler";
import { handleResponse } from "../handlers/response.handler";
import router from "./routes/users.routes";
import reposRouter from "./routes/repos.routes";
import cors, { CorsOptions } from "cors";

const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5173",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

const allowedOrigins = ["http://localhost:http:127.0.0.1:5173/"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));

app.use(express.json());
//midelwares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ruta de prueba
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1", router);
app.use("/api/v1", reposRouter);

app.use(handleResponse);
app.use(handleError);

export default app;
