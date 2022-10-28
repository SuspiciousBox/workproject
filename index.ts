import express from "express";
import page from "./page";

const PORT = process.env.PORT || 3000;
const app = express();

//Middlewares
app.use(express.json());

//Route
app.get("/", page);

//Server
app.listen(PORT, () => {
  console.log("App listening on port", PORT, "!");
});
