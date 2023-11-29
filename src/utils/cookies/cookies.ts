export class Cookies {
  constructor(private readonly name: string) {}

  getCookie<T extends string>(): T | null {
    const matches = `; ${document.cookie}`.match(`;\\s*${this.name}=([^;]+)`);

    return matches ? (matches[1] as T) : null;
  }

  setCookie<T extends string>(value: T, days: number = 999999): void {
    let expires = '';

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${this.name}=${value}${expires}; path=/`;
  }

  removeCookie(): void {
    this.setCookie('', -1);
  }
}
