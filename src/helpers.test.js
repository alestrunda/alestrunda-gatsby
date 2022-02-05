import { getYearsOfExperience, isEven } from "./helpers"

describe("isEven", () => {
  test("for 0 returns true", () => {
    expect(isEven(0))
  })

  test("for 1 returns false", () => {
    expect(isEven(1))
  })

  test("for 2 returns true", () => {
    expect(isEven(2))
  })
})

describe("getYearsOfExperience", () => {
  test("returns 5 if the timerange is 2015-2020", () => {
    expect(getYearsOfExperience(2015, new Date("1.1.2020")))
  })
})
