import { Request, Response } from "express";
import { DB, DbModel } from "../DB/MockedDB";

export function GetRoutes(_req: Request, res: Response){
const avaiableRoutes = [
    { get: ["/", "/games", "/games/:id"] },
    { post: ["/games"] },
    { patch: [] },
    { put: ["/games/:id"] },
    { delete: ["/games/:id"] },
  ];

  res.send(avaiableRoutes);
}

export function GetGames(_req: Request, res: Response){
  res.statusCode = 200;
  res.json(DB.games);
}

export function GetGame(req: Request, res: Response){
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
}

export function PutGame(req: Request, res: Response){
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
}

export function DeleteGame(req: Request, res: Response){
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
}

export function PostGame(req: Request, res: Response){
  const { title, price, year, platforms } = req.body;
  const index = DB.games.length;
  const id = index + 1;

  DB.games.push({ id, title, year, price, platforms });

  const responseData = DB.games.slice(-1);

  res.statusCode = 200;
  res.send(responseData);
}