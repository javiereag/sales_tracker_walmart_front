import CardDisplayData from "../shared-components/card-display-data";
import CalendarDash from "./calendar-dash";

function TopInDashboard({ datePicker, setDatePicker }) {
  const icon = <i class="bi-receipt-cutoff bi"></i>;
  return (
    <div className="gap-x-6 grid grid-cols-12 col-span-12 xxl:col-span-12 xl:col-span-12">
      <CalendarDash datePicker={datePicker} setDatePicker={setDatePicker} />
      <div className="col-span-2">
        <CardDisplayData
          title="ROI"
          value={10}
          type={"porcentage"}
          icon={icon}
        />
      </div>
      <div className="col-span-2">
        <CardDisplayData
          title="Net Procceds"
          type={"price"}
          value={1000}
          icon={icon}
        />
      </div>
      <div className="col-span-2">
        <CardDisplayData
          title="Total Cogs"
          type={"price"}
          value={3023}
          icon={icon}
        />
      </div>
      <div className="col-span-2">
        <CardDisplayData
          title="Net Profit"
          type={"price"}
          value={3333}
          icon={icon}
        />
      </div>
    </div>
  );
}

export default TopInDashboard;
