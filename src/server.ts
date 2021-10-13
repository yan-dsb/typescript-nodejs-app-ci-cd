import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const APP_VERSION = process.env.APP_VERSION || '0';

app.get('/', (_request: Request, response: Response) => {
  return response.send('<h1>Hello World!!</h1>');
});
app.get('/version', (_request: Request, response: Response) =>
  response.json({ message: APP_VERSION })
);
app.get('*', (_request: Request, response: Response) =>
  response.status(404).json({ message: 'not found' })
);
const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
