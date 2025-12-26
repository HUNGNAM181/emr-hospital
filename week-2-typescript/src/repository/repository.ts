import { IIdentifiable } from "../models/IIdentifiable";

export interface IRepository<T extends IIdentifiable> {
  add(item: T): void;
  getAll(): T[];
  findById(id: string): T | undefined;
  update(id: string, data: Partial<T>): void;
  deleteById(id: string): void;
}
