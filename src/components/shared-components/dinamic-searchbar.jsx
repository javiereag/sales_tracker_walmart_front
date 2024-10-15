import { useState } from "react";

function DinamicSearchBar({ selectedOption, handleSelected, executeFunc }) {
  const [input, setInput] = useState("");
  const options = [
    { label: "Select an option", value: "" },
    { label: "PO", value: "PO" },
    { label: "SKU", value: "sku" },
    { label: "CUSTOMER", value: "customer" },
  ];
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <select
        className="!border-gray-400 form-select !rounded-l-sm !rounded-r-none focus:ring-2 !focus:ring-indigo-500 !w-2/12 !h-full focus:outline-none"
        onChange={handleSelected}
        value={selectedOption}
      >
        {options?.map((option, i) => (
          <option className={`ti-form-select`} key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="!border-gray-400 ti-form-input w-9/12"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => executeFunc(e, input)}
      />
      <button
        onClick={(e) => executeFunc("button", input)}
        className="bg-primary rounded-r-sm w-1/12 h-full text-white"
      >
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default DinamicSearchBar;
