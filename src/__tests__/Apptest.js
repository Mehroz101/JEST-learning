import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { getValueFunc } from "../helper";

// test("btn test",()=> {
//     render(<App/>)
//     const btn = screen.getByRole("button");
//     fireEvent.click(btn);
//     expect(screen.getByText("updated")).toBeInTheDocument()
// })
// test("btn test in functional component by testId",()=> {
//     render(<App/>)
//     const btn = screen.getByTestId("btn1");
//     fireEvent.click(btn);
//     expect(screen.getByText("test")).toBeInTheDocument()
// })
test("btn test in functional component function outside the component",()=> {
    expect(getValueFunc()).toMatch("h1")
})