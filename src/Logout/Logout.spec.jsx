import React from "react";
import * as router from "react-router";
import { screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { customRender } from "./customRender";
import { Logout } from "./index"

/*describe("Logout Page simple tests", () => {
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
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate)
  })

  it("Redirect to Registrartion page", () => {
    customRender(<Logout />, currentState);

    expect(screen.getByTestId('logout-page')).toBeInTheDocument();
  })

  it("Input data and redirect to Map", () => {
    customRender(<Logout />, currentState);

    userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    userEvent.type(screen.getByLabelText("Password"), "123123");

    fireEvent.submit(screen.getByTestId("form-logout-page"), {
      target: {
        password: { value: "123123" },
        email: { value: "test@test.com" },
      }
    });

    expect(navigate).toHaveBeenCalledWith("/map");
  })

  it("Redirects to registration page", () => {
    customRender(<Logout />, currentState);

    userEvent.click(screen.getByTestId("new-profile-btn"));

    expect(navigate).toHaveBeenCalledWith("/registration");
  })
})*/

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

  it("Input data and redirect to Map", () => {
    customRender(<Logout />, currentState);

    userEvent.type(screen.getByLabelText("Email"),  "test@test.com");
    userEvent.type(screen.getByLabelText("Password"), "123123");

    fireEvent.submit(screen.getByTestId("form-logout-page"), {
      target: {
        password: "123123" ,
        email: "test@test.com",
      },
    });

    expect(navigate).toHaveBeenCalledWith("/map");
  });

  it("Redirect to Registration", () => {
    customRender(<Logout />, currentState);

    userEvent.click(screen.getByTestId("new-profile-btn"));

    expect(navigate).toHaveBeenCalledWith("/registration");
  });
});