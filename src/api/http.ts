export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}

export async function httpGet<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new HttpError(res.status, `HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
  