export function isNull(obj: any) {
  return obj === null || obj === undefined
}

export function isBoolean(obj: any): obj is boolean {
  return Object.prototype.toString.call(obj) === '[object Boolean]'
}
