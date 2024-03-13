export function idTransformer (id: number) {
  const MIN_LENGTH = 3
  const idString = id.toString()

  if (idString.length >= MIN_LENGTH) return `#${id}`

  const missingUnits = MIN_LENGTH - idString.length

  return `#${'0'.repeat(missingUnits)}${idString}`
}
