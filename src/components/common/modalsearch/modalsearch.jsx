import  {  Fragment, useEffect, useState } from 'react';
import { MENUITEMS } from '../sidebar/sidemenu/sidemenu';
import { Link } from 'react-router-dom';



const Modalsearch = () => {
  //Search functionality
  const [_show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const clickHandler = (_event) => {
      const searchResult = document.querySelector(".search-result");
      if (searchResult) {
        searchResult.classList.add("hidden");
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", clickHandler);
    };
  }, []);


  document.addEventListener("click", function () {
      document.querySelector(".search-result")?.classList.add("d-none");
  });

  const Removingdata=[
    {id:1, name:'People'},
    {id:2, name:'Pages'},
    {id:3, name:'Articles'},
    {id:4, name:'Tags'},
  ]
  const [items, setItems] = useState(Removingdata);

  const handleRemove = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return(
  <Fragment>
     <div id="search-modal" className="hidden mt-[1.75rem] hs-overlay ti-modal"  onClick={handleClose}>
    <div className="ti-modal-box">
      <div className="!border-defaultborder dark:!border-defaultborder/10 !border !rounded-[0.5rem] ti-modal-content">
        <div className="ti-modal-body">
  
          <div className="flex border-[2px] border-primary rounded-[0.25rem] w-full input-group">
            <a aria-label="anchor" href="#!"
              className="flex items-center border-e-[#dee2e6] bg-light !px-[0.75rem] !py-[0.375rem] !rounded-none !text-[0.875rem] input-group-text"
              id="Search-Grid"><i className="text-[0.875rem] fe fe-search header-link-icon"></i></a>
  
            <input type="search" className="border-0 form-control px-2 focus:ring-transparent w-full !text-[0.8rem]"
              placeholder="Search" aria-label="Username"
              autoComplete="off"/>
  
            <a aria-label="anchor" href="#!" className="flex items-center bg-light !px-[0.75rem] !py-[0.375rem] input-group-text"
              id="voice-search"><i className="fe fe-mic header-link-icon"></i></a>
            <div className="hs-dropdown ti-dropdown">
              <a aria-label="anchor" href="#!"
                className="flex items-center !border-0 !bg-light !px-[0.75rem] !py-[0.375rem] !rounded-none w-[2.313rem] h-[2.413rem] text-[0.95rem] btn btn-icon btn-light hs-dropdown-toggle ti-dropdown-toggle">
                <i className="fe fe-more-vertical"></i>
              </a>
              <ul className="absolute hidden !-mt-2 !p-0 hs-dropdown-menu ti-dropdown-menu">
                <li><a
                    className="flex !px-[0.9375rem] !py-[0.5rem] font-medium !text-[0.8125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 ti-dropdown-item"
                    href="#!">Action</a></li>
                <li><a
                    className="flex !px-[0.9375rem] !py-[0.5rem] font-medium !text-[0.8125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 ti-dropdown-item"
                    href="#!">Another action</a></li>
                <li><a
                    className="flex !px-[0.9375rem] !py-[0.5rem] font-medium !text-[0.8125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 ti-dropdown-item"
                    href="#!">Something else here</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a
                    className="flex !px-[0.9375rem] !py-[0.5rem] font-medium !text-[0.8125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 ti-dropdown-item"
                    href="#!">Separated link</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-2 font-normal text-[#8c9097] text-[0.813rem] dark:text-white/50 dark:text-gray-200">Are You Looking For...</p>
  
            {items?.map((idx, index)=>(
            <span className="dark:border-defaultborder/10 !px-[0.55rem] !py-[0rem] search-tags text-[0.75rem] me-1" key={index}>
              <i className="fe fe-user me-2"></i>{idx.name}<a
                href="#!" className="header-remove-btn tag-addon" onClick={() => handleRemove(index)}><span className="sr-only">Remove badge</span><i className="fe fe-x"></i></a></span>
                ))}
  
          </div>
  
  
          <div className="my-[1.5rem]">
            <p className="mb-2 font-normal text-[#8c9097] text-[0.813rem] dark:text-white/50">Recent Search :</p>
  
            <div id="dismiss-alert" role="alert"
              className="flex items-center dark:border-defaultborder/10 !mb-2 !p-2 border rounded-[0.3125rem] !text-[0.8125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 alert">
              <Link to="#"><span>Notifications</span></Link>
              <Link aria-label="anchor" className="leading-none ms-auto" to="#" data-hs-remove-element="#dismiss-alert"><i
                  className="!text-[0.8125rem] text-[#8c9097] dark:text-white/50 fe fe-x"></i></Link>
            </div>
  
            <div id="dismiss-alert1" role="alert"
              className="flex items-center dark:border-defaultborder/10 !mb-2 !p-2 border rounded-[0.3125rem] !text-[0.8125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 alert">
              <Link to="#"><span>Alerts</span></Link>
              <Link aria-label="anchor" className="leading-none ms-auto" to="#" data-hs-remove-element="#dismiss-alert1"><i
                  className="!text-[0.8125rem] text-[#8c9097] dark:text-white/50 fe fe-x"></i></Link>
            </div>
  
            <div id="dismiss-alert2" role="alert"
              className="flex items-center dark:border-defaultborder/10 !mb-0 !p-2 border rounded-[0.3125rem] !text-[0.8125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 alert">
              <Link to="#"><span>Mail</span></Link>
              <Link aria-label="anchor" className="lh-1 ms-auto" to="#" data-hs-remove-element="#dismiss-alert2"><i
                  className="!text-[0.8125rem] text-[#8c9097] dark:text-white/50 fe fe-x"></i></Link>
            </div>
          </div>
        </div>
  
        <div className="!px-[1.25rem] !py-[1rem] ti-modal-footer">
          <div className="inline-flex shadow-sm rounded-md">
            <button type="button"
              className="dark:border-white/10 !px-[0.75rem] !py-[0.45rem] !rounded-e-none rounded-s-[0.25rem] !text-[0.75rem] ti-btn-group ti-btn-primary">
              Search
            </button>
            <button type="button"
              className="dark:border-white/10 !px-[0.75rem] !py-[0.45rem] !rounded-s-none rounded-e-[0.25rem] !text-[0.75rem] ti-btn-group ti-btn-primary-full">
              Clear Recents
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Fragment>
);}

export default Modalsearch;
