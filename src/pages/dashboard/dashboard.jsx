import { Fragment } from "react";
import TopInDashboard from "../../components/dashboard-components/top-in-dashboard";
import AnalyticDash from "../../components/dashboard-components/analytic-dash";
import BottomAnalytic from "../../components/dashboard-components/bottom-analytic";

function Dashboard() {
  return (
    <Fragment>
      <div className="gap-x-6 grid grid-cols-12 py-2">
        <TopInDashboard />
        <AnalyticDash
          data={[
            {
              net_proceeds: 1000,
              total_cost: 500,
              net_profit: 900,
              qty_ordered: 80,
              posted_date: "2023-09-01",
            },
            {
              net_proceeds: 500,
              total_cost: 250,
              net_profit: 450,
              qty_ordered: 40,
              posted_date: "2023-09-02",
            },
          ]}
        />
        <BottomAnalytic />
      </div>
    </Fragment>
  );
}

export default Dashboard;
