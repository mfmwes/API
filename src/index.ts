import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import { getUsersRoute } from "./routes/getUsers-route";
import { createUserRoute } from "./routes/createUser-route";
import { updateUserRoute } from "./routes/updateUser-route";
import { deleteUserRoute } from "./routes/deleteUser-route";

const main = async () => {
  config();

  const app = express();
  app.use(express.json());

  await MongoClient.connect();

  app.use(getUsersRoute);
  app.use(createUserRoute);
  app.use(updateUserRoute);
  app.use(deleteUserRoute);

  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log("server listening on port 8000"));
};

main();
