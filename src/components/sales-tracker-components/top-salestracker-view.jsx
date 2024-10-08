function TopSalesTracker({ handleModal }) {
  return (
    <div className="flex flex-row justify-between items-center w-full h-32">
      <div className="mt-6 w-10/12 h-4/5">some</div>
      <div className="mt-6 px-4 w-2/12 h-4/5 box" onClick={handleModal}>
        Select Totals
      </div>
    </div>
  );
}

export default TopSalesTracker;
