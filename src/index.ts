import express from 'express';
import bodyParser from 'body-parser';
import Controller from './controller/Controller';


const app = express();
const port = 3001;

app.use(bodyParser.json()); 
app.route('/').post(Controller.post);
app.listen(port, () => {
    console.log("[SERVICE] Classificação de Familias ==> Running At: http://localhost:" + port);
});
