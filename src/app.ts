import express, { Request, Response } from 'express';
import 'dotenv/config';
import { routes as barRoutes } from './modules/bar/routes';

const app = express();

app.use(express.json());
app.use('/api', barRoutes);

export { app };
