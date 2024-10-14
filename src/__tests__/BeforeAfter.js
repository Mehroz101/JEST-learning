import { render, screen } from "@testing-library/react"
import App from "../App"

// beforeAll(()=>{
//     console.log("***** before all text case *****")
// })
// beforeEach(()=>{
//     console.log("***** before each text case *****")
// })
test("test case 1", ()=>{
    render(<App/>)
    const text = screen.getByText("first case");
    expect(text).toBeInTheDocument()
})
test("test case 2",()=>{
    render(<App/>)
    const text = screen.getByText("first case")
    expect(text).toBeInTheDocument()
  })
//   afterAll(()=>{
//     console.log("***** after all text case *****")
// })
afterEach(()=>{
    console.log("***** after each text case *****")
})