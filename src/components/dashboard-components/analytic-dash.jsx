import AnalyticsDashBoardInvoice from "../../container/dashboards/AnalyticsDashBoardInvoice";

function AnalyticDash({ data }) {
  return (
    <div className="col-span-12 xxl:col-span-12 xl:col-span-12">
      <div className="!mb-2 h-full box">
        <div className="justify-between !gap-0 !m-0 box-header">
          <div className="!text-sm box-title">Profit & Projections</div>
        </div>
        <div className="!py-0 box-body">
          <div id="crm-revenue-analytics">
            <AnalyticsDashBoardInvoice data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnalyticDash;
