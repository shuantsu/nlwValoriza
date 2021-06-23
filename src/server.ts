require('dotenv').config();
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes"

import "./database";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

// Middleware para tratamento de erros
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).send({ error: err.message });
    }

    return response.status(500).send({ 
      status: 'error',
      message: 'Internal server error'
    })
  }
)

app.listen(port, () => console.log(`Server is running on port ${port}!!`))