class LocalStorageUtil<T> {
  private keyName: string;
  private defaultValue: T;
  private storedValue: T;

  constructor(keyName: string, defaultValue: T) {
    this.keyName = keyName;
    this.defaultValue = defaultValue;
    this.storedValue = this.getStoredValue();
  }

  private getStoredValue(): T {
    try {
      const value = window.localStorage.getItem(this.keyName);
      if (value) {
        return JSON.parse(value) as T;
      } else {
        this.setStoredValue(this.defaultValue);
        return this.defaultValue;
      }
    } catch (err) {
      console.error(err);
      return this.defaultValue;
    }
  }

  private setStoredValue(newValue: T): void {
    try {
      window.localStorage.setItem(this.keyName, JSON.stringify(newValue));
      this.storedValue = newValue;
    } catch (err) {
      console.error(err);
    }
  }

  public get value(): T {
    return this.storedValue;
  }

  public set value(newValue: T) {
    this.setStoredValue(newValue);
  }
}

export const localStorageUtil = new LocalStorageUtil('strapi-auth-token', { token: null});
