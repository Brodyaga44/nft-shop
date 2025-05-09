import { IPag } from "./IPag.ts";

export interface IGetPag<T> extends IPag {
  results: T;
}
