import React from "react";
import { screen } from "@testing-library/react"
import * as router from "react-router";
import userEvent from "@testing-library/user-event";
import { customRender } from "../customRender";
import { NavigationMenu } from "./index"

describe("Auth page simple test", () => {
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
    order: {
      addresses: ["Пулково (LED)", "Эрмитаж", "Кинотеатр аврора", "Мариинский театр"],
      firstAddress: '',
      secondAddress: '',
      firstArrayAddress: null,
      secondArrayAddress: null,
      coordinates: [],
      needTaxi: false,
      taxiReady: false,
      activeCar: 'standart'
    },
    payment: {
      userCard: {
        name: 'Homer Simpson',
        cardNumber: '1234  1234  1234  1234',
        cardDate: '12/25',
        cvc: '123'
      },
      isCardCompleted: true,
      cardChanged: false,
    }
  };

  it("renders correctly", () => {

    currentState.ui.page = "Profile"

    customRender(<NavigationMenu />, currentState);

    expect(screen.getByText("Профиль")).toHaveClass('active')
  });
});

describe(("changes state on navigate"), () => {
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
    order: {
      addresses: ["Пулково (LED)", "Эрмитаж", "Кинотеатр аврора", "Мариинский театр"],
      firstAddress: '',
      secondAddress: '',
      firstArrayAddress: null,
      secondArrayAddress: null,
      coordinates: [],
      needTaxi: false,
      taxiReady: false,
      activeCar: 'standart'
    },
    payment: {
      userCard: {
        name: 'Homer Simpson',
        cardNumber: '1234  1234  1234  1234',
        cardDate: '12/25',
        cvc: '123'
      },
      isCardCompleted: false,
      cardChanged: false,
    }
  };

  it("change store on click", () => {

    const {store} = customRender(<NavigationMenu />, currentState);

    userEvent.click(screen.getByText("Профиль"));

    const newStore = store.getState();

    expect(newStore.ui.page).toBe('Profile')
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
    order: {
      addresses: ["Пулково (LED)", "Эрмитаж", "Кинотеатр аврора", "Мариинский театр"],
      firstAddress: '',
      secondAddress: '',
      firstArrayAddress: null,
      secondArrayAddress: null,
      coordinates: [],
      needTaxi: false,
      taxiReady: true,
      activeCar: 'standart'
    },
    payment: {
      userCard: {
        name: 'Homer Simpson',
        cardNumber: '1234  1234  1234  1234',
        cardDate: '12/25',
        cvc: '123'
      },
      isCardCompleted: true,
      cardChanged: false,
    }
  };

  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("card is not completed", () => {

    customRender(<NavigationMenu />, currentState);

    userEvent.click(screen.getByText("Профиль"));
    
    expect(navigate).toHaveBeenCalledWith("/profile", {"replace" : false, "state": undefined});
  });
})