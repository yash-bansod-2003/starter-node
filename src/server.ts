import express, { type Express, urlencoded, json } from "express";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "@/middlewares/error-handler";
import { todoRouter } from "@/routes/todo.route";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    })
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .use(todoRouter)
    .use(errorHandler);

  return app;
};
