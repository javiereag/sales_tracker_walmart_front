import DatePicker from "react-datepicker";

function CalendarSalesTracker({ datePicker, setDatePicker }) {
  return (
    <div className="flex flex-row justify-start items-center w-1/6 h-12">
      <div className="flex justify-center items-center bg-gray-300 rounded-l-sm w-12 h-9 text-center">
        <i class="bi bi-calendar4"></i>
      </div>
      <DatePicker
        className="focus:z-10 !border-gray-400 ti-form-input h-full text-white"
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
  );
}

export default CalendarSalesTracker;
