export class LocalStorage {
  constructor(private readonly name: string) {}

  setItem<T extends string>(value: T): void {
    localStorage.setItem(this.name, value);
  }

  getItem<T extends string>(): T | null {
    return localStorage.getItem(this.name) as T | null;
  }

  removeItem(): void {
    localStorage.removeItem(this.name);
  }
}
