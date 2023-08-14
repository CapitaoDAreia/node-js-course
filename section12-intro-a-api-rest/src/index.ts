import express from "express";
import { GetGames, GetGame, GetRoutes, PutGame, DeleteGame, PostGame } from "./Controllers/controllers";
import cors from "cors"

const PORT = 8081;
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//GET
app.get(`/`, GetRoutes);
app.get(`/games`, GetGames);
app.get(`/games/:id`, GetGame);

//PUT
app.put(`/games/:id`, PutGame);

//DELETE
app.delete(`/games/:id`, DeleteGame);

//POST
app.post(`/games`, PostGame);

app.listen(PORT, () => {
  console.log(`Server is listen on PORT ${PORT}`);
});
