import Scope from "./scope.js"

export default class Demo {
  attempt() {
    return Scope.get("demo")
  }
}
