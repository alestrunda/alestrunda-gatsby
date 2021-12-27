import { PROFESSIONAL_CAREER_START_YEAR } from "./constants"

export const isEven = (number) => number % 2 === 0

export const getYearsOfExperience = () =>
  new Date().getFullYear() - PROFESSIONAL_CAREER_START_YEAR
