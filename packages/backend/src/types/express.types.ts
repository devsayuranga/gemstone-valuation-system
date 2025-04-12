import { Request, Response, NextFunction } from 'express';

// Define the route handler type
export type RouteHandler = (
  req: Request,
  res: Response,
  next?: NextFunction
) => void | Promise<void>;

// Helper function to properly type route handlers
export const createHandler = (handler: RouteHandler): RouteHandler => {
  return handler;
};