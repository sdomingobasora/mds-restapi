import { Router } from 'express';

let callNumber = 1;

const R = Router();

R.get('/hello', (_, res) => {
  res
    .status(200)
    .json(`Hello world! API Call number ${callNumber++} since last restarted!`);
});

export const HelloRouter = { router: R };
