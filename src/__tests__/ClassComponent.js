import User from "../User"
import  renderer  from "react-test-renderer"
test("class component test" , ()=>{
    const container = renderer.create(<User/>).getInstance();
    expect(container.gettest("user")).toMatch("")
})