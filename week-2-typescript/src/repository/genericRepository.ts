import { IRepository } from "./repository";

export class GenericRepository<T extends { id: string }>
  implements IRepository<T>
{
  private data: T[] = [];

  add(item: T): void {
    this.data = [...this.data, item];
  }

  getAll(): T[] {
    return this.data;
  }

  findById(id: string): T | undefined {
    return this.data.find((item) => item.id === id);
  }

  update(id: string, update: Partial<T>): void {
    this.data = this.data.map((item) =>
      item.id === id ? { ...item, ...update } : item
    );
  }

  deleteById(id: string): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}
