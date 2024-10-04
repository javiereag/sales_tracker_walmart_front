import CardDisplayData from "../shared-components/card-display-data";

function BottomAnalytic(params) {
  const icon = <i class="bi-receipt-cutoff bi"></i>;
  return (
    <div className="gap-x-6 grid grid-cols-12 col-span-12 xxl:col-span-12 xl:col-span-12">
      <div className="col-span-2">
        <CardDisplayData title="Unit Sold" value={100} icon={icon} />
      </div>
      <div className="col-span-2">
        <CardDisplayData title="Total Selling Price" value={100} icon={icon} />
      </div>
    </div>
  );
}
export default BottomAnalytic;
