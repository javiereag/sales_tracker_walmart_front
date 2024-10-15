import { Fragment } from "react";

const Loader = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center w-full h-full">
        <img
          src="/src/assets/images/media/loader.svg"
          alt="gift"
          className="w-20 h-20"
        />
      </div>
    </Fragment>
  );
};

export default Loader;
