/**
 * Normalize internal app paths to use trailing slashes (except root).
 */
export function normalizeInternalPath(path: string): string {
  if (path === '/' || path === '') return '/'
  if (path.startsWith('/#')) return path
  return path.endsWith('/') ? path : `${path}/`
}

export function pathsMatch(a: string, b: string): boolean {
  return normalizeInternalPath(a) === normalizeInternalPath(b)
}
