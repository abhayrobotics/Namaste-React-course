import Contact from "../Contact";
import { screen ,render } from "@testing-library/react";

import "@testing-library/jest-dom"


test("check the Contact heading tag loads",()=>{


    render(<Contact/ >)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument();
})


test("check if button in contact page loads",()=>{


    render(<Contact/ >)

    // method-1
    // const button = screen.getByRole("button");

    // method -2
    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument();
})