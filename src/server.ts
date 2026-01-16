import express from 'express';
import { router } from './routes/routes';

const app = express();

app.use(router);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, ()=>{
    console.log(`Server iniciado\nRodando em http://localhost:${PORT}`)
})
