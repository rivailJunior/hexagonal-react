import CountryDAO from "./country.dao";
import { CountryMock } from "../mocks/country.mock";

const httpClientMock = {
  get: jest.fn(),
};
const countryDAO = new CountryDAO({
  get: httpClientMock.get,
});

describe("CountryDAO", () => {
  it("should call HttpClient.get with the correct URL", async () => {
    const countryName = "Brazil";
    const expectedUrl = `/name/${countryName}?fields=name,capital,currencies,flag`;

    await countryDAO.getCountry(countryName);

    expect(httpClientMock.get).toHaveBeenCalledWith(expectedUrl);
  });

  it("should return the data from HttpClient.get", async () => {
    const countryName = "Brazil";
    const expectedData = CountryMock;

    httpClientMock.get.mockImplementation(() => Promise.resolve(expectedData));

    const result = await countryDAO.getCountry(countryName);

    expect(result).toEqual(expectedData);
  });

  it("should handle errors from HttpClient.get", async () => {
    const countryName = "Brazil";
    const expectedError = new Error("Failed to get country data");

    httpClientMock.get.mockRejectedValue(expectedError);

    try {
      await countryDAO.getCountry(countryName);
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toEqual(expectedError);
    }
  });
});
