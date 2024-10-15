function LimitComponent({ handler, value }) {
  return (
    <select
      className="flex justify-center items-center !border-gray-400 form-select border h-9 text-center text-gray-700 cursor-pointer"
      value={value}
      onChange={handler}
    >
      {[10, 20, 30, 40, 50]?.map((ele, id) => (
        <option key={id}>{ele}</option>
      ))}
    </select>
  );
}

export default LimitComponent;
