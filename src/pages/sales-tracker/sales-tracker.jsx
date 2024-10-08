import { useEffect, useState } from "react";
import TopSalesTracker from "../../components/sales-tracker-components/top-salestracker-view";
import ModalTotals from "../../components/sales-tracker-components/modal-totals";
import TableTransactions from "../../components/shared-components/table-transactions";
import { getDataToTable } from "../../api/transaction";
import Paginator from "../../components/shared-components/paginator";
import DinamicSearchBar from "../../components/shared-components/dinamic-searchbar";

function SalesTracker(params) {
  const [modalTotals, setModalTotals] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [valueSearch, setValueSearch] = useState("");

  const changeData = async (current, type, value) => {
    try {
      const response = await getDataToTable(current, 20, type, value);
      if (response) {
        setDataTable(response.products);
        setTotalPages(response.totalPages);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e, value) => {
    if (e.key === "Enter") {
      if (!selectedOption) return;
      setValueSearch(value);
    }
  };

  const handleSelected = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleModal = () => {
    setModalTotals(!modalTotals);
  };

  const handleJumpPage = (current) => {
    if (current < 0) return;
    if (current > totalPages - 1) return;
    setPage(current);
  };

  useEffect(() => {
    changeData(page + 1, selectedOption, valueSearch);
  }, [page, valueSearch]);

  return (
    <div className="">
      <TopSalesTracker handleModal={handleModal} />
      {modalTotals && <ModalTotals handleModal={handleModal} />}
      <div className="h-[60vh]">
        <div className="h-12 w-full flex flex-row- justify-around items-centerf">
          <DinamicSearchBar
            selectedOption={selectedOption}
            handleSelected={handleSelected}
            handleKeyDown={handleKeyDown}
          />
          <Paginator
            page={page}
            totalPages={totalPages}
            handleJumpPage={handleJumpPage}
          />
        </div>
        <TableTransactions data={dataTable} />
      </div>
    </div>
  );
}

export default SalesTracker;
