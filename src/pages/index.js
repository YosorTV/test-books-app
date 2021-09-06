import { lazy } from "react";

export const Books = lazy(() => import('./Books'));
export const BookById = lazy(() => import('./BookById'));