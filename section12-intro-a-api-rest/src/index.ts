import express, {Request, Response} from 'express';
import DB from './DB/MockedDB';

const PORT = 80;
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get(`/`, (req: Request, res: Response)=>{
    res.send(DB)
})


app.listen(PORT, ()=>{
    console.log(`Server is listen on PORT ${PORT}`)
})