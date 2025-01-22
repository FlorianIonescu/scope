import { expect, test } from "vitest"
import Scope from "./scope"
import Demo from "./demo"

test("Context makes a context accessible for anything running inside its scope", () => {
  Scope.do("demo", { some: "data" }, () => {
    const demo = new Demo()
    const pulled = demo.attempt()

    expect(pulled.some).toBe("data")
  })
})

test("Context works correctly with stacked scopes", () => {
  Scope.do("first", { some: "original" }, () => {
    expect(Scope.get("first").some).toBe("original")

    Scope.do("second", { some: "other" }, () => {
      Scope.do("first", { some: "changed" }, () => {
        expect(Scope.get("first").some).toBe("changed")
      })
    })

    expect(Scope.get("first").some).toBe("original")
  })
})

test("Context works correctly with parallel scopes", () => {
  Scope.do("example", { some: "original" }, () => {
    expect(Scope.get("example").some).toBe("original")
  })

  Scope.do("example", { some: "changed" }, () => {
    expect(Scope.get("example").some).toBe("changed")
  })
})
