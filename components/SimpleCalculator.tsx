import {
  faCaretDown,
  faCopy,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

enum CalcType {
  Crypto = "crypto",
  Fiat = "fiat",
  Commodity = "commodity",
}

function Selectable({
  text,
  title,
  selected,
  onClick,
}: {
  text: string;
  title: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={
        "px-4 py-1 rounded-xl " +
        (selected
          ? "font-medium bg-bgPrimary text-frontPrimary"
          : "hover:opacity-80 cursor-pointer")
      }
      title={title}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

function ResultsDisplay({
  result,
  amount,
  currency,
}: {
  result: string;
  amount: string;
  currency: string;
}) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    // <div className="text-sm font-semibold opacity-90 font-body py-2 px-4 mt-4 rounded-lg flex justify-between items-center w-full bg-bgSecondary ">
    // 	{/* label */}
    // 	<div>Price:</div>
    // 	{/* value */}
    // 	<div>0.00</div>
    // 	{/* copy button */}
    // 	<div className=" bg-frontSecondary text-bgSecondary w-6 h-6 flex items-center justify-center rounded-lg">
    // 		{/* copy icon */}
    // 		<FontAwesomeIcon icon={faCopy} className="w-3 mb-px ml-px" />
    // 	</div>
    // </div>
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <div className="text-2xl font-medium">{result}</div>
        <div
          className="text-sm text-frontSecondary cursor-pointer"
          onClick={copyToClipboard}
        >
          <FontAwesomeIcon icon={faCopy} />
          {copied && <span className="text-xs text-frontPrimary">Copied!</span>}
        </div>
      </div>
      <div className="text-sm text-frontSecondary">{`${amount} ${currency} = ${result}`}</div>
    </div>
  );
}

const cryptoList = [
  {
    ticker: "BTC",
    name: "Bitcoin",
    price: 50000,
  },
  {
    ticker: "ETH",
    name: "Ethereum",
    price: 3000,
  },
  {
    ticker: "XRP",
    name: "Ripple",
    price: 1,
  },
];
const fiatList = [
  {
    ticker: "USD",
    name: "United States Dollar",
    price: 1,
  },
  {
    ticker: "EUR",
    name: "Euro",
    price: 0.83,
  },
  {
    ticker: "JPY",
    name: "Japanese Yen",
    price: 109.5,
  },
];
const commodityList = [
  {
    ticker: "GOLD",
    name: "Gold",
    price: 1800,
  },
  {
    ticker: "SILVER",
    name: "Silver",
    price: 25,
  },
  {
    ticker: "PLATINUM",
    name: "Platinum",
    price: 1000,
  },
];

const typesAndTickers = [
  {
    type: CalcType.Crypto,
    tickers: cryptoList.map((c) => c.ticker),
  },
  {
    type: CalcType.Fiat,
    tickers: fiatList.map((c) => c.ticker),
  },
  {
    type: CalcType.Commodity,
    tickers: commodityList.map((c) => c.ticker),
  },
];

export default function SimpleCalculator() {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  function handleCurrencyClick(currency: string) {
    console.log("SimpleCalculator.handleCurrencyClick(" + currency + ")");
    setSelectedCurrency(currency);
    handleCurrencyDropdownClick();
  }
  const [selectedType, setSelectedType] = useState<CalcType | null>(null);
  function handleCategoryClick(type: CalcType) {
    console.log("SimpleCalculator.handleCategoryClick(" + type + ")");
    setSelectedType(type);
    handleCategoryDropdownClick();
    // if currency is not in type, set currency to null
    if (
      selectedCurrency &&
      !typesAndTickers
        .find((t) => t.type === type)
        ?.tickers.includes(selectedCurrency)
    ) {
      setSelectedCurrency(null);
    }
  }
  const [currencyDropdownIsOpen, setCurrencyDropdownIsOpen] =
    useState<boolean>(false);
  function handleCurrencyDropdownClick() {
    console.log(
      "SimpleCalculator.setCurrencyDropdownIsOpen(" +
        !currencyDropdownIsOpen +
        ")"
    );
    setCurrencyDropdownIsOpen(!currencyDropdownIsOpen);
  }
  const [categoryDropdownIsOpen, setCategoryDropdownIsOpen] =
    useState<boolean>(false);
  function handleCategoryDropdownClick() {
    console.log(
      "SimpleCalculator.setCategoryDropdownIsOpen(" +
        !categoryDropdownIsOpen +
        ")"
    );
    setCategoryDropdownIsOpen(!categoryDropdownIsOpen);
  }
  const [amount, setAmount] = useState<string>("1");
  function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(
      "SimpleCalculator.handleAmountChange(" + event.target.value + ")"
    );
    setAmount(event.target.value);
  }
  const currencyList =
    selectedType === CalcType.Crypto
      ? cryptoList
      : selectedType === CalcType.Fiat
      ? fiatList
      : commodityList;
  const result = (
    parseFloat(amount) *
    currencyList.find((c) => c.ticker === selectedCurrency)?.price
  ).toFixed(2);

  const categoryList = [
    {
      type: CalcType.Crypto,
      name: "Crypto",
      abbreviation: "Crypto",
    },
    {
      type: CalcType.Fiat,
      name: "Fiat",
      abbreviation: "Fiat",
    },
    {
      type: CalcType.Commodity,
      name: "Commodity",
      abbreviation: "Comm",
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center bg-bgPrimary py-4 px-6 rounded-2xl">
      <div className="flex flex-col items-start text-2xl">
        <div className="whitespace-nowrap pb-5">Simple Calculator</div>
        {/* let's make a two-side div, to the left, we have the category with a dropdown, and to the right, the currency selector, which depends on the category */}
        <div className="flex w-full">
          {/* category picker trigger */}
          <div className="flex flex-col">
            <div
              className="bg-bgSecondary text-frontPrimary py-1 px-3 rounded-l-xl text-base flex font-semibold select-none gap-2"
              onClick={handleCategoryDropdownClick}
            >
              <div className="flex-grow flex items-center justify-center">
                {selectedType === null
                  ? "Type"
                  : categoryList.find((c) => c.type === selectedType)?.name}
              </div>
              <div className="flex-none flex items-center justify-center">
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="relative h-2">
              {/* category picker dropdown */}
              {categoryDropdownIsOpen && (
                <div className="absolute bg-frontSecondary text-bgPrimary py-1 px-3 rounded-xl text-base flex flex-col font-semibold select-none gap-2">
                  {categoryList.map((c) => (
                    <div
                      className="flex-grow flex items-center"
                      onClick={() => handleCategoryClick(c.type)}
                      key={c.type}
                    >
                      {c.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div
              className="bg-bgSecondary text-frontPrimary py-1 px-3 rounded-r-xl text-base flex font-semibold select-none gap-2"
              onClick={handleCurrencyDropdownClick}
            >
              <div className="flex-grow flex items-center justify-center">
                {selectedCurrency === null ? "Currency" : selectedCurrency}
              </div>
              <div className="flex-none flex items-center justify-center">
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="relative h-2 w-full">
              {/* currency picker dropdown */}
              {currencyDropdownIsOpen && (
                <div className="absolute bg-frontSecondary text-bgPrimary py-1 px-3 rounded-xl text-base flex flex-col font-semibold select-none gap-2 w-full">
                  {currencyList.map((c) => (
                    <div
                      className="flex-grow flex items-center"
                      onClick={() => handleCurrencyClick(c.ticker)}
                      key={c.ticker}
                    >
                      {c.ticker}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-5xl font-semibold font-body">{result}</div>
    </div>
  );
}

//         <div className="text-sm font-semibold opacity-90 font-body pb-2.5 pt-5">
//           Amount:
//         </div>
//         <div className="bg-frontSecondary text-bgPrimary p-0.5 rounded-xl text-base w-full flex font-semibold select-none">
//           <input
//             type="number"
//             className="bg-transparent text-frontPrimary w-full"
//           />
//         </div>
//         <div className="text-sm font-semibold opacity-90 font-body py-2 px-4 mt-4 rounded-lg flex justify-between w-full bg-bgSecondary">
//           <div>Value:</div>
//           <div>0.00</div>
//         </div>
//         <ResultsDisplay result="0.00" amount="0.00" currency="BTC" />
