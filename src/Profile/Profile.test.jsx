import React from "react";
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { customRender } from "../customRender";
import { Profile } from "./index"

describe("Auth page simple test", () => {
  const currentState = {
    ui: {
      isLoggedIn: true,
      page: 'Profile',
      authToken: ''
    },
    user: {
      email: "test@test.com",
      password: "123123",
      name: "Homer",
      surname: "Simpson"
    },
    payment: {
      userCard: {
        name: 'Homer Simpson',
        cardNumber: '',
        cardDate: '',
        cvc: ''
      },
      isCardCompleted: true,
      cardChanged: false,
    }
  };

  it("renders correctly", () => {

    currentState.ui.page = "Profile"

    customRender(<Profile />, currentState);

    expect(screen.getByLabelText("Имя владельца")).toHaveValue('Homer Simpson')
  });
});

describe(("correct data in store on typing"), () => {
  const currentState = {
    ui: {
      isLoggedIn: true,
      page: 'Profile',
      authToken: ''
    },
    user: {
      email: "test@test.com",
      password: "123123",
      name: "Homer",
      surname: "Simpson"
    },
    payment: {
      userCard: {
        name: 'Homer Simpson',
        cardNumber: '',
        cardDate: '',
        cvc: ''
      },
      isCardCompleted: false,
      cardChanged: false,
    }
  };

  it("change store on click", () => {

    const {store} = customRender(<Profile />, currentState);

    userEvent.type(screen.getByLabelText("Номер карты"),'1234123412341234');
    userEvent.type(screen.getByLabelText("MM/YY"),'1234');
    userEvent.type(screen.getByLabelText("CVC"),'1234');

    const newStore = store.getState();

    expect(newStore.payment.userCard.cardNumber).toBe('1234  1234  1234  1234')
    expect(newStore.payment.userCard.cardDate).toBe('12/34')
    expect(newStore.payment.userCard.cvc).toBe('123')
  });
})

describe(("navigate to another page"), () => {
  const currentState = {
    ui: {
      isLoggedIn: true,
      page: 'Map',
      authToken: ''
    },
    user: {
      email: "test@test.com",
      password: "123123",
      name: "Homer",
      surname: "Simpson"
    },
    payment: {
      userCard: {
        name: 'Homer Simpson',
        cardNumber: '',
        cardDate: '',
        cvc: ''
      },
      isCardCompleted: false,
      cardChanged: true,
    }
  };

  it("card is not completed", () => {
    customRender(<Profile />, currentState);

    expect(screen.getByTestId("changed-card-profile")).toBeInTheDocument()
  });
})