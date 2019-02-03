import uuid from 'uuid'

export function uniq() {
  return uuid.v4().replace(/-/g, '')
}
