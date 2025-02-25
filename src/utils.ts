export function assertString(value: unknown) {
  if (typeof value !== 'string') {
    throw Error(`${JSON.stringify(value)} must be a string`)
  }
  return value
}
