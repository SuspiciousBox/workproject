import express from "express";
import page from "./page";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Route
app.get("/", page);

//Server
app.listen(PORT, () => {
  console.log("App listening on port", PORT, "!");
});
