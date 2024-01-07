import { render, screen, fireEvent } from "@testing-library/react";
import { Combobox } from "./combobox";

const dataMock = [
  {
    value: "Brazil",
  },
  {
    value: "Colombia",
  },
  {
    value: "Mexico",
  },
];

const ComponentFake = ({ setValue = () => {} }: { setValue?: any }) => (
  <Combobox setValue={setValue} value="">
    {dataMock.map(({ value }) => (
      <Combobox.Option key={value} value={value} />
    ))}
  </Combobox>
);

describe("Combobox", () => {
  it("should render a combobox with input and label", () => {
    render(<ComponentFake />);
    const inputElement = screen.getByRole("textbox");
    const labelElement = screen.getByText("Search Country");

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it("should call setValue when input value changes", () => {
    const setValueMock = jest.fn();
    render(<ComponentFake setValue={setValueMock} />);
    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "Brazil" } });

    expect(setValueMock).toHaveBeenCalledWith("Brazil");
  });
});
