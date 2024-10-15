function CardDisplayData({
  title = "",
  value = 0,
  type = "",
  icon = "",
  color = "",
  rounded = false,
}) {
  return (
    <div className="flex !flex-row justify-around items-center w-full h-24 box">
      <div className={`h-full w-5/12 flex justify-start pl-4 items-center`}>
        <div
          className={`flex justify-center items-center ${
            color ? `bg-${color} text-white` : "bg-[#3FC0E8] text-[#3FC0E8]"
          } bg-opacity-15  text-xl ${
            rounded ? "rounded-full" : "rounded-md"
          } w-12 h-12`}
        >
          {icon}
        </div>
      </div>
      <div className="flex flex-col justify-center items-end px-2 w-7/12">
        <div className="w-full font-semibold text-end text-gray-700 text-xs">
          {title}
        </div>
        <div className="font-bold text-xl">
          {type === "porcentage"
            ? `${value?.toFixed(2)}%`
            : type === "price"
            ? `$${new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(value)}`
            : value}
        </div>
      </div>
    </div>
  );
}

export default CardDisplayData;
