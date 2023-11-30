import  express  from 'express';
import bodyParser from 'body-parser';
import { handleError } from '../handlers/error.handler';
import { handleResponse } from '../handlers/response.handler';

import router from './routes/users.routes';

const app = express();

app.use(express.json());
//midelwares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//ruta de prueba
app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/api/v1', router);

app.use(handleResponse);
app.use(handleError);

export default app;