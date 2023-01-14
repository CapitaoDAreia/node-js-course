import express, { Request, Response } from "express";
import { DB, DbModel } from "./DB/MockedDB";

const PORT = 80;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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



/*
  **TODO
  Dev a route to edit informations in games
  Search for id with .find
  Capture data sent to edition and execute the update actions
*/

/*
  **TODO
  Develop a route to delete existing games
  capture request creation data and validate each one of them
  use findIndex, use id as parameter
  return operation status and maybe even some data

*/

/*
  **TODO
  Dev a route to register new games
  Capture creation data in the request and validade each one
  Return req status and maybe even some data

*/

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
