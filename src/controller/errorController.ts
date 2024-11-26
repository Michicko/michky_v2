import { ErrorRequestHandler } from "express";
import { Request, Response } from "express-serve-static-core";

interface ExpressError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
}

const sendErrorDev = async (err: ExpressError, req: Request, res: Response) => {
  if (req.originalUrl.startsWith("/api")) {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } else {
    res.status(err.statusCode).render("error", {
      url: req.originalUrl,
      title: "Uh! oh something went wrong!",
      message: err.message,
    });
  }
};

const sendErrorProd = async (
  err: ExpressError,
  req: Request,
  res: Response
) => {
  if (req.originalUrl.startsWith("/api")) {
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      res.status(err.statusCode).json({
        status: 500,
        message: "Something went wrong",
      });
    }
  } else {
    res.status(err.statusCode).render("error", {
      url: req.originalUrl,
      title: "Uh! oh something went wrong!",
      message: err.message,
    });
  }
};

const errorController: ErrorRequestHandler = (err, req, res, _next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    sendErrorProd(err, req, res);
  }
};

export default errorController;
