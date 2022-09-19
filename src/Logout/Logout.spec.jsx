import React from "react";
import * as router from "react-router";
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { customRender } from "../customRender";
import { Logout } from "./index"

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
    customRender(<Logout />, currentState);

    expect(navigate).toHaveBeenCalledWith("/map");
  });

  it("Redirect to Registration", () => {
    customRender(<Logout />, currentState);

    userEvent.click(screen.getByTestId("new-profile-btn"));

    expect(navigate).toHaveBeenCalledWith("/registration", {"replace" : false, "state": undefined});
  });

  it("Correct inputs", ()=> {
    customRender(<Logout />, currentState);


    userEvent.type(screen.getByLabelText("Email"),  "test@test.com");
    userEvent.type(screen.getByLabelText("Password"), "123123");

    expect(screen.getByLabelText("Email")).toHaveValue("test@test.com");
    expect(screen.getByLabelText("Password")).toHaveValue("123123");
  })
});