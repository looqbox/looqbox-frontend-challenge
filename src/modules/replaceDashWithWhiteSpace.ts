export function replaceDashWithWhiteSpace(value: string) {
  if (value !== undefined) {
    return value.replace(/-/g, ' ')
  }
}
