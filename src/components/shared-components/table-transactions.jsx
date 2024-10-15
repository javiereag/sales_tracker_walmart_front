import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

function TableTransactions({ data = [], columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="col-span-12 xxl:col-span-12 xl:col-span-12 max-h-full overflow-auto">
      <table className="w-full min-w-max">
        <thead className="border-gray-300 bg-gray-100 border-b-2">
          {table?.getHeaderGroups()?.map((headerGroup) => (
            <tr className="h-10" key={headerGroup.id}>
              {headerGroup?.headers?.map((header) => (
                <th
                  className={`top-0 sticky bg-gray-100 px-2  ${
                    header.column.id === "consecutive"
                      ? "w-24 text-center"
                      : "min-w-40 text-start"
                  }`}
                  key={header.id}
                >
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
          {table?.getRowModel()?.rows?.map((row, id) => (
            <tr className="even:bg-gray-100 h-12" key={id}>
              {row?.getVisibleCells()?.map((cell, id) => (
                <td
                  className={`border-gray-300 px-2 border-b  ${
                    cell.column.id === "consecutive"
                      ? "w-24 text-center"
                      : "min-w-40 text-start"
                  } `} // Ancho mínimo para las celdas
                  key={id}
                >
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
