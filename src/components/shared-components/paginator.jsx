function Paginator({ page, totalPages, handleJumpPage }) {
  return (
    <ul className="w-full ti-pagination">
      <li className="page-item" onClick={() => handleJumpPage(0)}>
        <span
          className={`page-link !rounded-none px-3 py-[0.375rem]  ${
            page === 0 ? "disabled cursor-not-allowed" : "cursor-pointer"
          }`}
          to="#"
        >
          First
        </span>
      </li>
      <li className="page-item" onClick={() => handleJumpPage(page - 1)}>
        <span
          className={`page-link px-3 py-[0.375rem]  ${
            page === 0 ? "disabled cursor-not-allowed" : "cursor-pointer"
          }`}
          to="#"
        >
          Prev
        </span>
      </li>
      {Array.from({ length: totalPages })?.map((_, index) => {
        if (
          index === 0 ||
          index === page ||
          Math.abs(index - page) <= 2 ||
          index === totalPages - 1
        ) {
          return (
            <li
              className="page-item"
              key={index}
              onClick={() => handleJumpPage(index)}
            >
              <span
                className={`page-link px-3 py-[0.375rem] cursor-pointer  ${
                  page === index ? "active" : ""
                } `}
              >
                {index + 1}
              </span>
            </li>
          );
        }
      })}
      <li className="page-item" onClick={() => handleJumpPage(page + 1)}>
        <span
          className={`page-link px-3 py-[0.375rem]  ${
            page === totalPages - 1
              ? "disabled cursor-not-allowed"
              : "cursor-pointer"
          }`}
          to="#"
        >
          Next
        </span>
      </li>
      <li className="page-item" onClick={() => handleJumpPage(totalPages - 1)}>
        <span
          className={`page-link !rounded-none  px-3 py-[0.375rem]  ${
            page === totalPages - 1
              ? "disabled cursor-not-allowed"
              : "cursor-pointer"
          }`}
          to="#"
        >
          Last
        </span>
      </li>
    </ul>
  );
}

export default Paginator;
