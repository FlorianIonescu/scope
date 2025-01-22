import Scope from "./scope"

export default class Demo {
  attempt() {
    return Scope.get("demo")
  }
}
