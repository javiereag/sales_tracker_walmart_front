import { useEffect, useState } from "react";
import TopSalesTracker from "../../components/sales-tracker-components/top-salestracker-view";
import TableTransactions from "../../components/shared-components/table-transactions";
import { getDataToTable } from "../../api/transaction";
import Paginator from "../../components/shared-components/paginator";
import DinamicSearchBar from "../../components/shared-components/dinamic-searchbar";
import CalendarSalesTracker from "../../components/sales-tracker-components/calendar-sales-tracker";
import LimitComponent from "../../components/shared-components/limit-component";
import { CARDS_NAMES } from "../../helpers/cardsNames";
import CardDisplayData from "../../components/shared-components/card-display-data";
import { formatDates } from "../../helpers/formatDates";
import { COLUMS_DEFAULT } from "../../helpers/columsDefault";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Loader from "../../components/common/loader/loader";

function SalesTracker() {
  const [store, setStore] = useLocalStorage(
    "store",
    "Trinity Distributors LLC"
  );
  const [cards, setCards] = useState(CARDS_NAMES);
  const [dataTable, setDataTable] = useState([]);
  const [columns, setColumns] = useState(COLUMS_DEFAULT);
  const [dataCards, setDataCards] = useState({
    total_roi: 0,
    total_net_proceeds: 0,
    total_prods_cost: 0,
    total_net_profit: 0,
    total_qty_ordered: 0,
    total_selling: 0,
  });
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [valueSearch, setValueSearch] = useState("");
  const [limit, setLimit] = useState(20);

  const [datePicker, setDatePicker] = useState({
    initialDate: "",
    finalDate: "",
  });

  const changeData = async (
    page,
    limit,
    type,
    value,
    { initialDate, finalDate },
    store
  ) => {
    try {
      if ((initialDate && !finalDate) || (!initialDate && finalDate)) return;
      if (initialDate > finalDate) return;
      setDataTable([]);
      const response = await getDataToTable({
        page,
        limit,
        type,
        value,
        initialDate: initialDate ? formatDates(initialDate) : "",
        finalDate: finalDate ? formatDates(finalDate) : "",
        store,
      });
      if (response) {
        setDataTable(response.products);
        setTotalPages(response.totalPages);
        setDataCards({ ...response.globalData });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  const searchData = (e, value) => {
    if (e.key === "Enter" || e === "button") {
      if (!selectedOption) return;
      setValueSearch(value);
      setPage(0);
    }
  };

  const handleSelected = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCards = (state) => {
    setCards(state);
  };

  const handleJumpPage = (current) => {
    if (current < 0) return;
    if (current > totalPages - 1) return;
    setPage(current);
  };

  useEffect(() => {
    changeData(page + 1, limit, selectedOption, valueSearch, datePicker, store);
  }, [page, limit, valueSearch, datePicker.finalDate, store]);

  return (
    <div className="text-sm">
      <div className="flex flex-row justify-between items-center my-2 w-full">
        <span className="flex flex-row justify-start items-center w-12/12 overflow-x-auto">
          {cards
            ?.filter((ele) => ele.selected)
            ?.map((ele, i) => (
              <div className="mr-4 min-w-52">
                <CardDisplayData
                  key={i}
                  title={ele.label}
                  value={dataCards[ele.value]}
                  type={ele.type}
                  color={"primary"}
                  icon={<i class="bi bi-briefcase"></i>}
                  rounded={true}
                />
              </div>
            ))}
        </span>
        <TopSalesTracker handleCards={handleCards} />
      </div>
      <div className="p-5 box">
        <div className="flex flex-col justify-around items-center w-full h-32">
          <DinamicSearchBar
            selectedOption={selectedOption}
            handleSelected={handleSelected}
            executeFunc={searchData}
          />
          <div className="flex flex-row justify-between items-center w-full">
            <CalendarSalesTracker
              datePicker={datePicker}
              setDatePicker={setDatePicker}
            />

            <div className="flex flex-row justify-end items-center">
              <LimitComponent handler={handleLimit} value={limit} />
              <Paginator
                page={page}
                totalPages={totalPages}
                handleJumpPage={handleJumpPage}
              />
            </div>
          </div>
        </div>
        <div className="h-[70vh]">
          {dataTable?.length ? (
            <TableTransactions data={dataTable} columns={columns} />
          ) : (
            <Loader />
          )}
        </div>
        <div className="flex flex-row justify-between items-center mt-4 h-14">
          <span>
            Showing 1 to {limit} of Page {page + 1} of {totalPages}
          </span>
          <div className="flex flex-row justify-end items-center">
            <LimitComponent handler={handleLimit} value={limit} />
            <Paginator
              page={page}
              totalPages={totalPages}
              handleJumpPage={handleJumpPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesTracker;
