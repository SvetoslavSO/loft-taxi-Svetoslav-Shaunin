import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("Render app correctly", () => {
  it("Render app correctly", () => {
    const { getByLabelText } = render(<App/>)
    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });
})