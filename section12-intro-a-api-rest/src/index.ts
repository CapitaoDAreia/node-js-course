import express, { Request, Response } from "express";
import { DB, DbModel } from "./DB/MockedDB";

const PORT = 80;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//GET
app.get(`/`, (_req: Request, res: Response) => {
  const avaiableRoutes = [
    { get: ["/", "/games", "/games/:id"] },
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

app.get(`/games/:id`, (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    const response = DB.games.find((game) => game.id === id);
    if (response) {
      res.statusCode = 200;
      res.send(response);
    } else {
      res.sendStatus(404);
    }
  }
});

//PUT
app.put(`/games/:id`, (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const boilerplate = DbModel.games[1];

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    const game = DB.games.find((game) => game.id === id) ?? boilerplate;

    const { title, year, price, platforms } = req.body;

    if (title) {
      game.title = title ?? "";
    }

    if (year) {
      game.year = year;
    }

    if (price) {
      game.year = price;
    }

    if (platforms) {
      game.platforms = platforms;
    }

    res.statusCode = 200;
    res.send(game);
  }
});

//DELETE
app.delete(`/games/:id`, (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    const index = DB.games.findIndex((game) => game.id === id);
    if (index != -1) {
      DB.games.splice(index, 1);

      res.statusCode = 200;
      res.send(DB.games);
    } else {
      res.sendStatus(404);
    }
  }
});

//POST
app.post(`/games`, (req: Request, res: Response) => {
  const { title, price, year, platforms } = req.body;
  const index = DB.games.length;
  const id = index + 1;

  DB.games.push({ id, title, year, price, platforms });

  const responseData = DB.games.slice(-1);

  res.statusCode = 200;
  res.send(responseData);
});

app.listen(PORT, () => {
  console.log(`Server is listen on PORT ${PORT}`);
});
