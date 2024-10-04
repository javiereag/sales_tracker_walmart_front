import DatePicker from "react-datepicker";

function CalendarDash({ datePicker, setDatePicker }) {
  return (
    <div className="relative flex flex-col gap-2 col-span-4 bg-primary p-2 rounded-lg h-24">
      <div className="text-start">
        <p className="font-semibold text-lg text-white">Your Store Info</p>
      </div>

      <div className="relative z-10 flex justify-between items-stretch !gap-2 w-full h-2/4">
        <div className="!flex-nowrap input-group">
          <div className="opacity-80 h-9 text-[#8c9097] dark:text-white/50 input-group-text">
            <i className="ri-calendar-line"></i>{" "}
          </div>
          <DatePicker
            className="focus:z-10 opacity-50 ti-form-input h-12 text-white"
            placeholderText="Choose Date"
            selectsRange={true}
            startDate={datePicker.initialDate}
            endDate={datePicker.finalDate}
            onChange={(update) => {
              setDatePicker({
                initialDate: update[0],
                finalDate: update[1],
              });
            }}
            isClearable={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarDash;
