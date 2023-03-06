import express from "express";
import cors from "cors";
import config from "../environments.config";

import { root } from "./router";
//import { connectDatabase } from "./database/connectDatabase";

const app = express();
const port: string = config.PORT;

app.use(express.json());
app.use(cors());

app.use(root);

app.listen(port, () => {
  console.log(`* [${port}] server running at http://localhost:${port}`);
});
