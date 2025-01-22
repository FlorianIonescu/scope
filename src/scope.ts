type Context = {
  name: string
  context: any
}

export default class Scope {
  static context: Context[] = []

  static do<T>(name: string, context: any, action: () => T): T {
    this.context.push({ name, context })
    const result = action()
    this.context.pop()
    return result
  }

  static get(name: string) {
    let context: Context | null = null
    for (let i = this.context.length - 1; i >= 0; i--) {
      const entry = this.context[i]
      if (entry.name === name) {
        context = entry
        break
      }
    }

    if (!context) {
      throw Error(`Attempted to access context ${context} outside its scope.`)
    }

    return context.context
  }
}
