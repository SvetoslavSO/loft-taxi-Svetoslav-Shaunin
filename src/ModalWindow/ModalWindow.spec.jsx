import React from "react";
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { customRender } from "../customRender";
import { ModalWindow } from "./index"

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
    currentState.payment.isCardCompleted = true

    customRender(<ModalWindow />, currentState);

    expect(screen.getByLabelText("выберите адрес начальной точки маршрута")).toHaveValue('')
    expect(screen.getByLabelText("выберите адрес конечной точки маршрута")).toHaveValue('')
  });

  it("can choose car", () => {

    currentState.payment.isCardCompleted = true

    const {store} = customRender(<ModalWindow />, currentState);

    userEvent.click(screen.getByTestId("rate-comfort-test"))

    const newStore = store.getState();

    expect(newStore.order.activeCar).toBe("comfort")
  });
});

describe(("Modal window with not completed card"), () => {
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

  it("card is not completed", () => {
    currentState.payment.userCard.name = ""
    currentState.payment.userCard.cardNumber = ""
    currentState.payment.userCard.cardDate = ""
    currentState.payment.userCard.cvc = ""
    currentState.order.taxiReady = false

    customRender(<ModalWindow />, currentState);

    expect(screen.getByTestId("add-card-modal-test")).toBeInTheDocument()
  });
})

describe(("Modal window taxi ordered"), () => {
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

  it("card is not completed", () => {

    customRender(<ModalWindow />, currentState);

    expect(screen.getByTestId("taxi-ordered-test")).toBeInTheDocument()
  });
})