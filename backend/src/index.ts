import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


require('dotenv').config();

const app: express.Application = express();

app.use(helmet());
app.use(cors({
    origin: '*'
}));

const port: string = process.env.SERVER_PORT || '5000';


app.listen(port, (): void => {

    console.log(`Server listening on port ${port}`);
});