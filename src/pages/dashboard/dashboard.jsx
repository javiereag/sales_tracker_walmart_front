import { Fragment, useEffect, useState } from "react";
import TopInDashboard from "../../components/dashboard-components/top-in-dashboard";
import AnalyticDash from "../../components/dashboard-components/analytic-dash";
import BottomAnalytic from "../../components/dashboard-components/bottom-analytic";
import { dataToAnalytics } from "../../api/transaction";
import { formatDates } from "../../helpers/formatDates";

function Dashboard() {
  const [data, setData] = useState([]);
  const [datePicker, setDatePicker] = useState({
    initialDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    finalDate: new Date(),
  });
  const getDataForLines = async ({ initialDate, finalDate }) => {
    try {
      const transactions = await dataToAnalytics(
        formatDates(initialDate),
        formatDates(finalDate)
      );
      setData(transactions);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDataForLines(datePicker);
  }, [datePicker.finalDate]);
  return (
    <Fragment>
      <div className="gap-x-6 grid grid-cols-12 py-2">
        <TopInDashboard datePicker={datePicker} setDatePicker={setDatePicker} />
        <AnalyticDash data={data} />
        <BottomAnalytic />
      </div>
    </Fragment>
  );
}

export default Dashboard;
