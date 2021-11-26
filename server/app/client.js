import config from "./config.js";
import { MongoClient } from "mongodb";

const client = new MongoClient(config.db);

client
  .connect()
  .then(() => {
    console.info("MongoDB Client 🏃🏾‍♂️");
  })
  .catch((err) => {
    console.error("Error starting MongoDB Client", err.message);

    // Exit process with failure
    process.exit(1);
  });

process.on("SIGINT", () => {
  client.close().then(() => {
    console.info("MongoDB Client disconnected");
    process.exit(0);
  });
});

export default client;
