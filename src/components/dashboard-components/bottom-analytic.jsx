import CardDisplayData from "../shared-components/card-display-data";

function BottomAnalytic({
  dataCards: { total_qty_ordered = 0, total_selling = 0 },
}) {
  const icon = <i className="bi-receipt-cutoff bi"></i>;
  return (
    <div className="gap-x-6 grid grid-cols-12 col-span-12 xxl:col-span-12 xl:col-span-12">
      <div className="col-span-2">
        <CardDisplayData
          title="Unit Sold"
          value={total_qty_ordered}
          icon={icon}
        />
      </div>
      <div className="col-span-2">
        <CardDisplayData
          title="Total Selling Price"
          type={"price"}
          value={total_selling}
          icon={icon}
        />
      </div>
    </div>
  );
}
export default BottomAnalytic;
