import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";

describe.skip("input text cases", () => {
  test("test input exist", () => {
    render(<App />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
  test("test input attributes", () => {
    render(<App />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toHaveAttribute("type", "text");
    expect(inputField).toHaveAttribute("name", "username");
    expect(inputField).toHaveAttribute("id", "username");
  });
  test("test input placeholder", () => {
    render(<App />);
    const inputField = screen.getByPlaceholderText("Enter your name");
    expect(inputField).toBeInTheDocument();
    // const inputField = screen.getByRole("textbox");
    // expect(inputField).toHaveAttribute("placeholder","Enter your name")
  });
});
describe.skip("input text cases 2", () => {
  test("test input exist", () => {
    render(<App />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
  test("test input attributes", () => {
    render(<App />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toHaveAttribute("type", "text");
    expect(inputField).toHaveAttribute("name", "username");
    expect(inputField).toHaveAttribute("id", "username");
  });
  test("test input placeholder", () => {
    render(<App />);
    const inputField = screen.getByPlaceholderText("Enter your name");
    expect(inputField).toBeInTheDocument();
    // const inputField = screen.getByRole("textbox");
    // expect(inputField).toHaveAttribute("placeholder","Enter your name")
  });
});
describe.skip("input text cases 3", () => {
  test("test input exist", () => {
    render(<App />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
  test("test input attributes", () => {
    render(<App />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toHaveAttribute("type", "text");
    expect(inputField).toHaveAttribute("name", "username");
    expect(inputField).toHaveAttribute("id", "username");
  });
  test("test input placeholder", () => {
    render(<App />);
    const inputField = screen.getByPlaceholderText("Enter your name");
    expect(inputField).toBeInTheDocument();
    // const inputField = screen.getByRole("textbox");
    // expect(inputField).toHaveAttribute("placeholder","Enter your name")
  });
});

// describe.only("input text cases 4", () => {
//     test("test case onchange",()=>{
//         render(<App/>);
//         const input = screen.getByRole("textbox");
//         fireEvent.change(input,{target:{value:"abc"}});
//         expect(input.value).toBe("abc")
//     })
    
// })

