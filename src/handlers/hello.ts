import { Response, Request } from 'express';

let callNumber = 1;

export const helloHandler = (_: Request, res: Response) => {
  res
    .status(200)
    .json(`Hello world! API Call number ${callNumber++} since last restarted!`);
};
