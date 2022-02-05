import { PROFESSIONAL_CAREER_START_YEAR } from "./constants"

export const getYearsOfExperience = (
  fromYear = PROFESSIONAL_CAREER_START_YEAR,
  toDate = new Date()
) => toDate.getFullYear() - fromYear

export const isEven = (number) => number % 2 === 0
