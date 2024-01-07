export default class ComboboxHelper {
  private countryInput: string;
  private countryList: string;

  constructor(input: string, list: string) {
    this.countryInput = input;
    this.countryList = list;
  }
  private getDOMElements = () => {
    const inputCountry = document.querySelector(this.countryInput);
    const ulCountry = document.querySelector(this.countryList);
    return {
      inputCountry,
      ulCountry,
    };
  };

  updateInputValue = (value: string) => {
    const element = this.getDOMElements().inputCountry;
    if (element instanceof HTMLInputElement) {
      element.value = value;
    }
  };

  toggleList = (show: "none" | "block") => {
    const element = this.getDOMElements().ulCountry;
    if (element instanceof HTMLElement) {
      element.style.display = show;
    }
  };
}
