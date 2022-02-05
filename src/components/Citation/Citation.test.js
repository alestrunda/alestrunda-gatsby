import * as React from "react"
import { render, screen } from "@testing-library/react"
import Citation from "./Citation"

test("test", () => {
  const author = "John Doe"
  const authorDetail = "coworker"
  const content = "Lorem impsum dolor sit atmet"
  render(
    <Citation author={author} authorDetail={authorDetail}>
      {content}
    </Citation>
  )

  expect(screen.getByText(author)).toBeInTheDocument()
  expect(screen.getByText(authorDetail)).toBeInTheDocument()
  expect(screen.getByText(`"${content}"`)).toBeInTheDocument()
})
