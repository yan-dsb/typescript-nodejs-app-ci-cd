import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('*', (_request: Request, response: Response) =>
  response.status(404).json({ message: 'not found' })
);
const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
