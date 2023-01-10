import express, { Request, Response } from "express";
import DB from "./DB/MockedDB";

const PORT = 80;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get(`/`, (_req: Request, res: Response) => {
  const avaiableRoutes = [
    { get: ["/", "/games"] },
    { post: [] },
    { patch: [] },
    { put: [] },
    { delete: [] },
  ];

  res.send(avaiableRoutes);
});

app.get(`/games`, (_req: Request, res: Response) => {
  res.statusCode = 200;
  res.json(DB.games);
});

app.listen(PORT, () => {
  console.log(`Server is listen on PORT ${PORT}`);
});
