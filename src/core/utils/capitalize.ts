export function capitalize(str: string | undefined) {
  if (typeof str !== "string" || str.length === 0) {
    return str; // Return as-is if not a string or empty
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
