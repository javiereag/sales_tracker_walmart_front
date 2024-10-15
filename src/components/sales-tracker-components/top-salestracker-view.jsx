import { useState } from "react";
import { CARDS_NAMES } from "../../helpers/cardsNames";

function TopSalesTracker({ handleCards }) {
  const [selecteds, setSelecteds] = useState(CARDS_NAMES);

  const clear = () => {
    const cleared = selecteds?.map((ele) => ({ ...ele, selected: false }));
    setSelecteds(cleared);
  };
  const fill = () => {
    const filled = selecteds?.map((ele) => ({ ...ele, selected: true }));
    setSelecteds(filled);
  };
  const resetDefault = () => {
    setSelecteds([
      { label: "ROI", value: "total_roi", type: "porcentage", selected: true },
      {
        label: "Net Procceds",
        value: "total_net_proceeds",
        type: "price",
        selected: true,
      },
      {
        label: "Total Cogs",
        value: "total_prods_cost",
        type: "price",
        selected: false,
      },
      {
        label: "Net Profit",
        value: "total_net_profit",
        type: "price",
        selected: true,
      },
      {
        label: "Unit Sold",
        value: "total_qty_ordered",
        type: "number",
        selected: false,
      },
      {
        label: "Total Selling Price",
        value: "total_selling",
        type: "price",
        selected: false,
      },
    ]);
  };

  return (
    <div className="flex flex-row justify-between items-center w-1/12 h-32">
      <div className="flex-shrink-0 cursor-pointer">
        <div
          className="flex flex-col p-4 box hs-dropdown-toggle"
          data-hs-overlay="#hs-small-modal"
        >
          <div className="flex justify-center">
            <span className="flex justify-center items-center bg-primary shadow-sm !rounded-full avatar avatar-md">
              <i className="text-[1.5rem] ri-layout-line" />
            </span>
          </div>
          <div className="flex flex-col text-center">
            <span className="font-semibold text-[.875rem]">Select Totals</span>
          </div>
        </div>
      </div>
      <div id="hs-small-modal" className="hidden hs-overlay ti-modal">
        <div className="ti-modal-box ti-modal-content">
          <div className="ti-modal-header">
            <h6 className="ti-modal-title">Select Totals</h6>
            <button
              type="button"
              className="hs-dropdown-toggle ti-modal-close-btn"
              data-hs-overlay="#hs-small-modal"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3.5 h-3.5"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="ti-modal-body">
            <div className="flex flex-row justify-around items-center h-9">
              <button
                className="bg-[#845adf] hover:bg-opacity-80 rounded-sm w-3/12 h-full text-center text-sm text-white duration-75 ease-linear"
                onClick={fill}
              >
                Add All
              </button>
              <button
                onClick={clear}
                className="bg-[#845adf] hover:bg-opacity-80 rounded-sm w-3/12 h-full !text-white text-sm duration-75 ease-linear"
              >
                Clear Selected
              </button>
            </div>
          </div>
          <div className="ti-modal-body">
            {selecteds?.map((ele, id) => (
              <div
                key={id}
                className="flex flex-row justify-start items-center my-2"
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={ele.selected}
                  onClick={() => {
                    setSelecteds((prev) =>
                      prev?.map((e) => {
                        if (e.label === ele.label) {
                          e.selected = !e.selected;
                        }
                        return e;
                      })
                    );
                  }}
                />
                <span className="ml-5 text-lg" >{ele.label}</span>
              </div>
            ))}
          </div>
          <div className="ti-modal-body">
            <div className="flex flex-row justify-around items-center h-9">
              <button
                className="bg-[#845adf] hover:bg-opacity-80 rounded-sm w-4/12 h-full text-center text-white text-xs duration-75 ease-linear"
                onClick={resetDefault}
              >
                Reset To Default
              </button>
              <button
                data-hs-overlay="#hs-small-modal"
                className="bg-[#845adf] hover:bg-opacity-80 !rounded-sm !w-4/12 !h-full !text-white !text-xs text-center duration-75 ease-linear ti-modal-close-btn"
                onClick={() => handleCards(selecteds)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSalesTracker;
