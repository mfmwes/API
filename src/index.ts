import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";

const main = async () => {
  config();

  const app = express();

  await MongoClient.connect();

  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();
    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();
    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log("server listening on port 8000"));
};

main();
