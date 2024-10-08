import { useState } from "react";

function DinamicSearchBar({ selectedOption, handleSelected, handleKeyDown }) {
  const [input, setInput] = useState("");
  const options = [
    { label: "Select an option", value: "" },
    { label: "PO", value: "PO" },
    { label: "SKU", value: "sku" },
  ];
  return (
    <div className="flex flex-row justify-center items-center">
      <select onChange={handleSelected} value={selectedOption}>
        {options.map((option, i) => (
          <option
            className={`hover:bg-primary hover:text-white`}
            key={i}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, input)}
      />
    </div>
  );
}

export default DinamicSearchBar;
