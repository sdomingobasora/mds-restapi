import { Router } from 'express';
import * as handlers from '../handlers';

const R = Router();

R.get('/hello', handlers.helloHandler);

export const HelloRouter = { router: R };
