function CardDisplayData({ title, value, type, icon, color }) {
  return (
    <div className="flex !flex-row justify-around items-center w-full h-24 box">
      <div className={`h-full w-5/12 flex justify-center items-center`}>
        <div
          className={`flex justify-center items-center ${
            color
              ? `bg-[#${color}] text-[#${color}]`
              : "bg-[#3FC0E8] text-[#3FC0E8]"
          } bg-opacity-15  text-xl rounded-md w-5/12 h-2/4`}
        >
          {icon}
        </div>
      </div>
      <div className="flex flex-col justify-center items-end px-2 w-5/12">
        <div className="font-semibold text-end text-gray-700 text-xs">{title}</div>
        <div className="font-bold text-xl">
          {type === "porcentage"
            ? `${value.toFixed(2)}%`
            : type === "price"
            ? `$${value.toFixed(2)}`
            : value}
        </div>
      </div>
    </div>
  );
}

export default CardDisplayData;
