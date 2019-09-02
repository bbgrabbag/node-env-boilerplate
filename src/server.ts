import * as express from 'express';

const app = express();

app.get('/', (_, res) => {
    res.status(200).send('Connected');
});

export default app;
