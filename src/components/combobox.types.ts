type ComboOptionsProps = {
  value: string;
  flag?: string;
};

type ComboboxProps = {
  setValue: (value: string) => void;
  value: string;
  children: React.ReactNode;
};

export type { ComboOptionsProps, ComboboxProps };
