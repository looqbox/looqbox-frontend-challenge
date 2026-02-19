export function saveToStorage<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key);

  if (!data) return null;

  return JSON.parse(data) as T;
}

export function removeFromStorage(key: string) {
  localStorage.removeItem(key);
}
