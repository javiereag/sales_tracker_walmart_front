import { useState } from "react";
import TopSalesTracker from "../../components/sales-tracker-components/top-salestracker-view";
import ModalTotals from "../../components/sales-tracker-components/modal-totals";

function SalesTracker(params) {
  const [modalTotals, setModalTotals] = useState(false);
  const handleModal = () => {
    setModalTotals(!modalTotals);
  };
  return (
    <div className="">
      <TopSalesTracker handleModal={handleModal} />
      {modalTotals && <ModalTotals handleModal={handleModal} />}
    </div>
  );
}

export default SalesTracker;
