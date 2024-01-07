export interface Country {
  name: Name;
  currencies: Currencies;
  capital: string[];
  flag: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  eng: Eng;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Currencies {
  GIP: Gip;
}

export interface Gip {
  name: string;
  symbol: string;
}
