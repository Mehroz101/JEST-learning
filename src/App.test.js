import { render, screen } from "@testing-library/react";
import App from "./App";

test("test case1",()=>{
  render(<App/>)
  const text = screen.getByText("first case")
  expect(text).toBeInTheDocument()
})