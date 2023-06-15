type Payload = any[] | object | number | string

export const browserStorage = {
  set: (key: string, value: Payload) => window.localStorage.setItem(key, JSON.stringify(value)),
  get: (key: string) => {
    const result: Payload = JSON.parse(window.localStorage.getItem(key) || '')
    return result
  }
}
