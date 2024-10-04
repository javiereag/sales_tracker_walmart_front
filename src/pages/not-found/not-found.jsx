import { useNavigate } from "react-router-dom";

function NotFound(params) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-2/6 h-1/4 box">
        <h1 className="font-bold text-blue">PAGE NOT FOUND</h1>
        <button
          className="bg-blue rounded-lg w-4/6 h-1/4 font-semibold text-white duration-75 ease-linear hover:scale-105"
          onClick={() => navigate(`${import.meta.env.BASE_URL}dashboards`)}
        >
          Go to Dashboards
        </button>
      </div>
    </div>
  );
}

export default NotFound;
