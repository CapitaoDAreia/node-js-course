import express, {Request, Response} from 'express' //import express

const app = express() //instance express to an app const
const port: number = 4000

app.get("/", (_req: Request, res: Response)=>{ //defining get route
  res.send('Você está na root') //define get route response
})

app.get('/contact', (_req: Request, res: Response)=>{
  res.send("Você está na Contact Page")
})

app.get('/about', (_req: Request, res: Response)=>{
  res.send("Você está na About Page")
})

app.listen(port, ()=>{ //setting up the server 
  console.log(`App is running on ${port} `)
})