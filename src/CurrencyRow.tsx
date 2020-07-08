import React, { ChangeEvent } from "react";

interface CurrencyRowProps {
  currencyOptions: Array<string>;
  selectedCurrency: string;
  onChangeCurrency: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeAmount: (event: ChangeEvent<HTMLInputElement>) => void;
  amount: string;
  selectid: string;
}

export const CurrecncyRow: React.FC<CurrencyRowProps> = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
  selectid,
}) => {
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        id={selectid}
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
