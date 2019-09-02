import app from './server';
import setup from './setup';

setup.env();

// tslint:disable-next-line: no-console
app.listen(process.env.PORT, () => console.log('Connected to server on PORT ' + process.env.PORT));
