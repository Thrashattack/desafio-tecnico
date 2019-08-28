import express from 'express';
import bodyParser from 'body-parser';
import Controller from './controller/Controller';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.post('/', Controller.post);

app.listen(port, () => {
    console.log("[SERVICE] Classificação de familias iniciado na porta: " + port);
});
