export function removeUndefinedFromObject<T extends object>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  ) as T;
}

export function deepCleanUndefinedFields<T>(obj: T): T {
  return Object.entries(obj as any).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null) {
      if (typeof value === "object" && !Array.isArray(value)) {
        acc[key as keyof T] = deepCleanUndefinedFields(value) as any;
      } else {
        acc[key as keyof T] = value as any;
      }
    }
    return acc;
  }, {} as T);
}

export function convertObjectValuesToString<T extends object>(
  obj: T
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return [key, JSON.stringify(value)];
      }
      return [key, String(value)];
    })
  );
}

export function convertObjectToQueryParams<T extends object>(obj: T): string {
  const queryParams = new URLSearchParams(
    convertObjectValuesToString(removeUndefinedFromObject(obj))
  );

  return queryParams.toString();
}
