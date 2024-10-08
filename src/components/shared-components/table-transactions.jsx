import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

function TableTransactions({ data }) {
  const columns = [
    { header: "Date", accessorKey: "date" },// +
    { header: "Customer Name", accessorKey: "customer" },// +
    { header: "PO", accessorKey: "PO" },// +
    { header: "SKU", accessorKey: "sku" },// +
    { header: "State", accessorKey: "state" },// +
    { header: "QTY", accessorKey: "totalProds" },// +
    { header: "Walmart Selling Price", accessorKey: "priceForProd" },//  +
    { header: "Total Selling And Shipping Fee Price", accessorKey: "totalCharge" },// +
    { header: "COGS", accessorKey: "cogs" },// +
    { header: "Walmart Fees", accessorKey: "walFees" },// +
    { header: "Net Proceeds", accessorKey: "netProceeds" },// charge menos el 15% de los fees de walmart
    { header: "Net Profit", accessorKey: "netProfit" },// restar netProceeds con total cogs
    { header: "Walmart Category Fee", accessorKey: "walFeesPer" }, // 15%
    { header: "ROI", accessorKey: "ROI" },// netProceeds dividido por cogs
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="col-span-12 xxl:col-span-12 xl:col-span-12 max-h-96 overflow-y-scroll">
      <table className="w-full">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="bg-gray-100 h-14" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="top-0 sticky bg-gray-100 text-center" key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, id) => (
            <tr className="even:bg-gray-100 h-12" key={id}>
              {row.getVisibleCells().map((cell, id) => (
                <td className="text-center" key={id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableTransactions;
