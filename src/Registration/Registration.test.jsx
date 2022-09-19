import React from "react";
import * as router from "react-router";
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { customRender } from "../customRender";
import { Registration } from "./index"

describe("Auth page simple test", () => {
  const currentState = {
    ui: {
      isLoggedIn: false,
      page: 'Logout',
    },
    user: {
      email: "",
      password: "",
      name: "",
      surname: ""
    }
  };

  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("redirect to Map", () => {
    currentState.ui.isLoggedIn = true 
    customRender(<Registration />, currentState);

    expect(navigate).toHaveBeenCalledWith("/map");
  });

  it("Correct inputs", ()=> {
    customRender(<Registration />, currentState);


    userEvent.type(screen.getByLabelText("Email"),  "test@test.com");
    userEvent.type(screen.getByLabelText("Придумайте пароль"), "123123");

    expect(screen.getByLabelText("Email")).toHaveValue("test@test.com");
    expect(screen.getByLabelText("Придумайте пароль")).toHaveValue("123123");
  })
});