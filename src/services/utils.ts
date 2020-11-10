export function UrlBuilder(url: string, options: any) {
  if (!options) {
    return url
  }

  Object.keys(options).map(key => {
    if (options[key] === null || options[key] === '') {
      delete options[key]
    }
  })
  let esc = encodeURIComponent
  let query = Object.keys(options)
    .map(k => esc(k) + '=' + esc(options[k]))
    .join('&')
  url += '?' + query
  return url
}


/*
  ----------------------------------------------------------------------------------------------------
  isNullOrEmpty()
  ----------------------------------------------------------------------------------------------------
  check a variable is null or empty
*/
export function isNullOrEmpty(input: any): boolean {
  // Null or empty
  if (input === null || input === undefined || input === '') {
    return true
  }

  // value = False
  if (input === 'False') {
    return true
  }

  // Array empty
  if (typeof input.length === 'number' && typeof input !== 'function') {
    return !input.length
  }

  // Blank string like '   '
  if (typeof input === 'string' && input.match(/\S/) === null) {
    return true
  }

  // Object empty
  if (input.constructor === Object && Object.keys(input).length === 0) {
    return true
  }

  return false
}
