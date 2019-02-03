import { v4 as uuid } from 'uuid'

export function uniq() {
  return uuid().replace(/-/g, '')
}
