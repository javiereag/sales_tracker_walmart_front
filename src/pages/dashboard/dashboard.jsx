import { Fragment, useEffect, useState } from "react";
import TopInDashboard from "../../components/dashboard-components/top-in-dashboard";
import AnalyticDash from "../../components/dashboard-components/analytic-dash";
import BottomAnalytic from "../../components/dashboard-components/bottom-analytic";
import { dataToAnalytics } from "../../api/transaction";
import { formatDates } from "../../helpers/formatDates";
import TableTransactions from "../../components/shared-components/table-transactions";
import { COLUMS_DEFAULT } from "../../helpers/columsDefault";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Loader from "../../components/common/loader/loader";

function Dashboard() {
  const [store, setStore] = useLocalStorage(
    "store",
    "Trinity Distributors LLC"
  );
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

  const getDataForLines = async ({ initialDate, finalDate }, store) => {
    try {
      if ((initialDate && !finalDate) || (!initialDate && finalDate)) return;
      if (initialDate > finalDate) return;
      setDataTable([]);
      setDataAnalytic([]);
      setDataCards({
        total_net_profit: 0,
        total_qty_ordered: 0,
        total_net_proceeds: 0,
        total_prods_cost: 0,
        total_roi: 0,
      });
      const lines = await dataToAnalytics(
        formatDates(initialDate),
        formatDates(finalDate),
        store
      );
      if (lines) {
        setDataTable(lines.responseTable);
        setDataAnalytic(lines.analytic);
        setDataCards(lines.infoToCards);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataForLines(datePicker, store);
  }, [datePicker.finalDate, store]);
  return (
    <Fragment>
      <div className="gap-x-6 grid grid-cols-12 py-2">
        <TopInDashboard
          datePicker={datePicker}
          dataCards={dataCards}
          setDatePicker={setDatePicker}
        />
        {/* <AnalyticDash data={dataAnalytic || []} /> */}
        <BottomAnalytic dataCards={dataCards} />
        <div className="gap-x-6 grid grid-cols-12 col-span-12 xxl:col-span-12 xl:col-span-12 h-[50vh]">
          {dataTable?.length ? (
            <TableTransactions data={dataTable} columns={COLUMS_DEFAULT} />
          ) : (
            <div className="col-span-12 xxl:col-span-12 xl:col-span-12 bg-white h-full">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
