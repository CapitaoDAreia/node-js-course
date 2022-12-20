import express, { Request, Response } from "express"; //import express

const app = express(); //instance express to an app const
const port: number = 4000;

app.get("/", (_req: Request, res: Response) => {
  //defining get route
  res.send("Você está na root"); //define get route response
});

app.get("/contact", (_req: Request, res: Response) => {
  res.send("Você está na Contact Page");
});

app.get("/about", (_req: Request, res: Response) => {
  res.send("Você está na About Page");
});

app.get("/givename/:name", function (_req: Request, res: Response) {
  //barra dois pontos e nome, definindo o parâmetro nome

  const response = [
    `Fala, ${_req.params.name}. Tá aqui o que você queria.`,
    _req.params,
  ];

  if (_req.params.name) {
    res.send(response);
  }
});

app.get("/catchinfo/:info?", (req: Request, res: Response) => {
  //Optional parameter
  const infoPassada = req.params.info;
  if (infoPassada) {
    res.send("Obrigado pela informação!");
  } else {
    res.send("Nos envie alguma informação!");
  }
});

app.get("/optionalparams", (req: Request, res: Response) => { 
  //queryParams, provided in URL
  //URL example: http://localhost:4000/optionalparams?name=Igor&sobrenome=Daniel&description=Eu_Sou_O_Milior
  
  const optionalParamName = req.query["name"];

  if (optionalParamName) {
    const bunchOfParams = [
      {
        name: req.query.name,
        sobrenome: req.query.sobrenome,
        descricao: req.query.description,
      },
    ];
    res.send({ message: `Your info is apreciated!`, params: bunchOfParams });
  } else {
    res.send(`Give us some information to proceed!`);
  }
});

try {
  app.listen(port, () => {
    //setting up the server
    console.log(`App is running on ${port} `);
  });
} catch (error) {
  console.log("Error... ", error);
}
