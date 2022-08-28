import React from "react";
import Profile from "./Profile";
import { render } from "@testing-library/react";

describe("Render profile correctly", () => {
  it("Render profile correctly", () => {
    const { getByLabelText } = render(<Profile/>)
    expect(getByLabelText("Имя владельца")).toHaveAttribute("name", "username");
    expect(getByLabelText("Номер карты")).toHaveAttribute("name", "card");
  });
})