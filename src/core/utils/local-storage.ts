export function getLocalStorage<T = unknown>(key: string): T | null {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

export function setLocalStorage<T = unknown>(key: string, data: T): T | null {
  try {
    const serialized = JSON.stringify(data);
    window.localStorage.setItem(key, serialized);

    return data;
  } catch {
    return null;
  }
}

export function removeLocalStorage(key: string): boolean {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}
