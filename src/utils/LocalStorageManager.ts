export default class LocalStorageManager {
  static get = (key: string) => {
    let data: string | null

    try {
      data = window.localStorage.getItem(key)

      return data ? JSON.parse(data) : null
    } catch (error) {
      window.eval(`console.error(${JSON.stringify(error)})`)

      return error
    }
  }

  static getAsync = async (key: string) => {
    return await new Promise((resolve, reject): void => {
      setTimeout(
        (self: typeof LocalStorageManager, key: string): void => {
          const data = self.get(key)

          data instanceof Error ? reject(data) : resolve(data)
        },
        0,
        this,
        key
      )
    })
  }

  static set = (key: string, value: any) => {
    let result: boolean = false

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      result = true
    } catch (error) {
      window.eval('console.error(${JSON.stringify(error)})')
    }

    return result
  }

  static setAsync = async (key: string, value: any) => {
    return await new Promise((resolve, reject): void => {
      setTimeout(
        (self: typeof LocalStorageManager, key: string, value: any): void => {
          const result = self.set(key, value)

          result ? resolve(result) : reject(result)
        },
        0,
        this,
        key,
        value
      )
    })
  }

  static remove(key: string): boolean {
    let result: boolean = false

    try {
      if (this.has(key)) {
        window.localStorage.removeItem(key)
        result = true
      }
    } catch (error) {
      window.eval(`console.error(${JSON.stringify(error)})`)
    }

    return result
  }

  static removeAsync = async (key: string) => {
    return await new Promise((resolve, reject): void => {
      setTimeout(
        (self: typeof LocalStorageManager, key: string): void => {
          const result = self.remove(key)

          result ? resolve(result) : reject(result)
        },
        0,
        this,
        key
      )
    })
  }

  static has = (key: string) => {
    return Object.prototype.hasOwnProperty.call(window.localStorage, key)
  }

  static hasAsync = async (key: string) => {
    return await new Promise((resolve, reject): void => {
      setTimeout(
        (self: typeof LocalStorageManager, key: string): void => {
          const result = self.has(key)

          result ? resolve(result) : reject(result)
        },
        0,
        this,
        key
      )
    })
  }
}
