import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import './database/typeorm';
import routes from './routes';
import 'dotenv/config';
import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

const APP_VERSION = process.env.APP_VERSION || '0';

app.get('/', (_request: Request, response: Response) => {
  return response.send('<h1>Hello Dev</h1>');
});
app.get('/version', (_request: Request, response: Response) =>
  response.json({ message: APP_VERSION })
);
app.get('*', (_request: Request, response: Response) =>
  response.status(404).json({ message: 'not found' })
);
const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
