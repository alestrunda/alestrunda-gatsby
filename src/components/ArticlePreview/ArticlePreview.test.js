import * as React from "react"
import { render, screen } from "@testing-library/react"
import ArticlePreview from "./ArticlePreview"

test("renders correctly", () => {
  const author = "John Doe"
  const date = "1.1.2022"
  const url = "/blog/article-link"
  const title = "Article title"
  const content = "Lorem impsum dolor sit atmet"

  render(
    <ArticlePreview author={author} date={date} url={url} title={title}>
      {content}
    </ArticlePreview>
  )
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(title)
  expect(screen.getByTestId("link-read-more")).toHaveAttribute("href", url)
  expect(screen.getByText(content)).toBeInTheDocument()
  expect(screen.getByTestId("author")).toHaveTextContent(author)
  expect(screen.getByTestId("date")).toHaveTextContent(date)
})
