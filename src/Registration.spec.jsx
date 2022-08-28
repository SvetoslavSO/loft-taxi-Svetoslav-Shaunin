import React from "react";
import { RegistrationWithAuth } from "./Registration";
import { render } from "@testing-library/react";

describe("Render registration correctly", () => {
  it("Render registration correctly", () => {
    const { getByLabelText } = render(<RegistrationWithAuth/>)
    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Как вас зовут?")).toHaveAttribute("name", "name");
    expect(getByLabelText("Придумайте пароль")).toHaveAttribute("name", "password");
  });
})