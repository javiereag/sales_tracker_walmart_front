import CardDisplayData from "../shared-components/card-display-data";
import CalendarDash from "./calendar-dash";

function TopInDashboard({
  datePicker,
  dataCards: {
    total_net_profit = 0,
    total_net_proceeds = 0,
    total_prods_cost = 0,
    total_roi = 0,
  },
  setDatePicker,
}) {
  const icon = <i className="bi-receipt-cutoff bi"></i>;
  return (
    <div className="gap-x-6 grid grid-cols-12 col-span-12 xxl:col-span-12 xl:col-span-12">
      <CalendarDash datePicker={datePicker} setDatePicker={setDatePicker} />
      <div className="col-span-2">
        <CardDisplayData
          title="ROI"
          value={total_roi}
          type={"porcentage"}
          icon={icon}
        />
      </div>
      <div className="col-span-2">
        <CardDisplayData
          title="Net Procceds"
          type={"price"}
          value={total_net_proceeds}
          icon={icon}
        />
      </div>
      <div className="col-span-2">
        <CardDisplayData
          title="Total Cogs"
          type={"price"}
          value={total_prods_cost}
          icon={icon}
        />
      </div>
      <div className="col-span-2">
        <CardDisplayData
          title="Net Profit"
          type={"price"}
          value={total_net_profit}
          icon={icon}
        />
      </div>
    </div>
  );
}

export default TopInDashboard;
