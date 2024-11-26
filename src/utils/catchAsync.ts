import { NextFunction, Request, Response } from "express";

const catchAsync =
  (cb: CallableFunction) =>
  (req: Request, res: Response, next: NextFunction) => {
    cb(req, res, next).catch((err: Error) => next(err));
  };

export default catchAsync;
