import { Router, Request, Response } from "express";

const root = Router();

root.get("/", (req: Request, res: Response) => {
  console.log(`* [Redirection] Redirected to /`);
  res.send({ message: "Express is working" });
});

export default root;
