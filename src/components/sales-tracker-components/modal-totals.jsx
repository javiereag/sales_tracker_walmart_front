import { OPTIONS_SALES_TRACKER } from "../../helpers/sales-tracker-helper/list-options";

function ModalTotals({ handleModal }) {
  return (
    <div className="relative z-40 inset-0 flex flex-col justify-center items-center w-72 box">
      <div className="flex flex-col justify-center items-center">
        {OPTIONS_SALES_TRACKER.map((ele, id) => (
          <div
            className="flex flex-row justify-between items-center w-52"
            key={id}
          >
            <input type="checkbox" />
            <div>{ele.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModalTotals;
