import { render, screen, fireEvent, act } from "@testing-library/react";
import CountryDAO from "../domain/country.dao";
import { Main as App } from "./main";
import { CountryMock } from "../mocks/country.mock";

const httpClientMock = {
  get: jest.fn(),
};

const countryDao = new CountryDAO(httpClientMock);

describe("Main", () => {
  const expectedData = CountryMock;
  const countryName = "Brazil";

  test("should render App with input and label and no list", async () => {
    render(<App countryDao={countryDao} />);
    expect(
      screen.getByRole("label", { name: "Search Country" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: "Search Country" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("list", { name: "countries" })
    ).not.toBeInTheDocument();
  });

  test("should render App with input and label and list with one child", async () => {
    httpClientMock.get.mockImplementation(() => Promise.resolve(expectedData));

    render(<App countryDao={countryDao} />);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.change(
        screen.getByRole("textbox", { name: "Search Country" }),
        {
          target: { value: "Brazil" },
        }
      );
    });

    expect(await screen.findByTestId("countryList")).toBeInTheDocument();
    expect(await screen.findByDisplayValue(countryName)).toBeInTheDocument();
  });
});
