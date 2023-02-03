import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import { Router } from "express";
import { getUsersRoute } from "./routes/getUsers-route";
import { createUserRoute } from "./routes/createUser-route";
import { updateUserRoute } from "./routes/updateUser-route";
import { deleteUserRoute } from "./routes/deleteUser-route";
import { getUserByIdRoute } from "./routes/get-user-by-id-route";

const main = async () => {
  config();
  const routes = Router();

  const app = express();
  app.use(express.json());

  await MongoClient.connect();

  // routes

  app.post("/users", createUserRoute);
  app.delete("/users/:id", deleteUserRoute);
  app.patch("/users/:id", updateUserRoute);
  app.get("/users", getUsersRoute);
  app.get("/users/:id", getUserByIdRoute);


  //server 
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("server listening on port 8000"));
};

main();
