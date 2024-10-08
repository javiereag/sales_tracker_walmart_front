import { Fragment, useEffect, useState } from "react";
import TopInDashboard from "../../components/dashboard-components/top-in-dashboard";
import AnalyticDash from "../../components/dashboard-components/analytic-dash";
import BottomAnalytic from "../../components/dashboard-components/bottom-analytic";
import { dataToAnalytics, getAllTrack } from "../../api/transaction";
import { formatDates } from "../../helpers/formatDates";
import TableTransactions from "../../components/shared-components/table-transactions";

function Dashboard() {
  const [dataAnalytic, setDataAnalytic] = useState([]);
  const [datePicker, setDatePicker] = useState({
    initialDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    finalDate: new Date(),
  });

  const [dataTable, setDataTable] = useState([]);

  const [dataCards, setDataCards] = useState({
    total_net_profit: 0,
    total_qty_ordered: 0,
    total_net_proceeds: 0,
    total_prods_cost: 0,
    total_roi: 0,
  });

  const getDataForLines = async ({ initialDate, finalDate }) => {
    try {
      if (initialDate && !finalDate) return;
      if (!initialDate && finalDate) return;
      if (initialDate > finalDate) return;
      const [lines, table] = await Promise.all([
        dataToAnalytics(formatDates(initialDate), formatDates(finalDate)),
        getAllTrack(formatDates(initialDate), formatDates(finalDate)),
      ]);
      if (table) {
        setDataTable(table);
      }
      if (lines) {
        setDataAnalytic(lines.analytic);
        setDataCards(lines.infoToCards);
      }
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
        <TopInDashboard
          datePicker={datePicker}
          dataCards={dataCards}
          setDatePicker={setDatePicker}
        />
        <AnalyticDash data={dataAnalytic} />
        <BottomAnalytic dataCards={dataCards} />
        <div className="h-[50vh]">
          <TableTransactions data={dataTable} />
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
