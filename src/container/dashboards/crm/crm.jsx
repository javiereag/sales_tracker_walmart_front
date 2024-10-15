import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  Conversionratio,
  Dealsstatistics,
  Profit,
  Profitearned,
  Revenueanalytics,
  Sourcedata,
  Totalcustomers,
  Totaldeals,
  Totalrevenue,
} from "./crmdata";
import face10 from "../../../assets/images/faces/10.jpg";
import face12 from "../../../assets/images/faces/12.jpg";

const Crm = () => {
  // for User search function
  const [Data, setData] = useState(Dealsstatistics);

  const userdata = [];

  const myfunction = (idx) => {
    let Data;
    for (Data of Dealsstatistics) {
      if (Data.name[0] == " ") {
        Data.name = Data.name.trim();
      }
      if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
          userdata.push(Data);
        }
      }
    }
    setData(userdata);
  };
  return (
    <Fragment>
      <div className="block md:flex justify-between items-center my-[1.5rem] page-header-breadcrumb">
        <div>
          <p className="!mb-0 font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70">
            Welcome back, Json Taylor !
          </p>
          <p className="font-normal text-[#8c9097] text-[0.813rem] dark:text-white/50">
            Track your sales activity, leads and deals here.
          </p>
        </div>
        <div className="mt-2 md:mt-0 btn-list">
          <button
            type="button"
            className="bg-primary shadow-none mb-0 !px-[0.86rem] !py-[0.51rem] !rounded-[0.35rem] !font-medium !text-[0.85rem] text-white !me-[0.375rem] !ms-0 btn-wave ti-btn"
          >
            <i className="inline-block ri-filter-3-fill"></i>Filters
          </button>
          <button
            type="button"
            className="shadow-none mb-0 !px-[0.86rem] !py-[0.51rem] !rounded-[0.35rem] !font-medium !text-[0.85rem] !me-[0.375rem] !ms-0 btn-wave ti-btn ti-btn-outline-secondary"
          >
            <i className="inline-block ri-upload-cloud-line"></i>Export
          </button>
        </div>
      </div>
      <div className="gap-x-6 grid grid-cols-12">
        <div className="col-span-12 xxl:col-span-9 xl:col-span-12">
          <div className="gap-x-6 grid grid-cols-12">
            <div className="col-span-12 xxl:col-span-4 xl:col-span-4">
              <div className="col-span-12 xxl:col-span-12 xl:col-span-12">
                <div className="crm-highlight-card box">
                  <div className="box-body">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="mb-2 font-semibold text-[1.125rem] text-white">
                          Your target is incomplete
                        </div>
                        <span className="block text-[0.75rem] text-white">
                          <span className="opacity-[0.7]">
                            You have completed
                          </span>{" "}
                          <span className="font-semibold text-warning">
                            48%
                          </span>{" "}
                          <span className="opacity-[0.7]">
                            of the given target, you can also check your status
                          </span>
                          .
                        </span>
                        <span className="block mt-[0.125rem] font-semibold">
                          <Link className="text-[0.813rem] text-white" to="#">
                            <u>Click here</u>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <div id="crm-main">
                          <Profit />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 xxl:col-span-12 xl:col-span-12">
                <div className="box">
                  <div className="flex justify-between box-header">
                    <div className="box-title">Top Deals</div>
                    <div className="hs-dropdown ti-dropdown">
                      <Link
                        aria-label="anchor"
                        to="#"
                        className="flex justify-center items-center bg-light shadow-none !px-2 !py-1 border-light rounded-sm w-[1.75rem] h-[1.75rem] !font-medium !text-[0.8rem]"
                        aria-expanded="false"
                      >
                        <i className="text-[0.8rem] fe fe-more-vertical"></i>
                      </Link>
                      <ul className="hidden hs-dropdown-menu ti-dropdown-menu">
                        <li>
                          <Link
                            className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                            to="#"
                          >
                            Week
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                            to="#"
                          >
                            Month
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                            to="#"
                          >
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body">
                    <ul className="crm-top-deals mb-0 list-none">
                      <li className="mb-[0.9rem]">
                        <div className="flex flex-wrap items-start">
                          <div className="me-2">
                            <span className="inline-flex justify-center items-center">
                              <img
                                src={face10}
                                alt=""
                                className="rounded-full w-[1.75rem] h-[1.75rem] text-[0.65rem] leading-[1.75rem]"
                              />
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="mb-[1.4px] font-semibold text-[0.813rem]">
                              Michael Jordan
                            </p>
                            <p className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                              michael.jordan@example.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem]">
                            $2,893
                          </div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex flex-wrap items-start">
                          <div className="me-2">
                            <span className="inline-flex justify-center items-center bg-warning/10 rounded-full !w-[1.75rem] !h-[1.75rem] font-semibold text-[0.65rem] text-warning leading-[1.75rem]">
                              EK
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="mb-[1.4px] font-semibold text-[0.813rem]">
                              Emigo Kiaren
                            </p>
                            <p className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                              emigo.kiaren@gmail.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem]">
                            $4,289
                          </div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex flex-wrap items-top">
                          <div className="me-2">
                            <span className="inline-flex justify-center items-center">
                              <img
                                src={face12}
                                alt=""
                                className="rounded-full !w-[1.75rem] !h-[1.75rem] text-[0.65rem] leading-[1.75rem]"
                              />
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="mb-[1.4px] font-semibold text-[0.813rem]">
                              Randy Origoan
                            </p>
                            <p className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                              randy.origoan@gmail.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem]">
                            $6,347
                          </div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex flex-wrap items-top">
                          <div className="me-2">
                            <span className="inline-flex justify-center items-center bg-success/10 rounded-full !w-[1.75rem] !h-[1.75rem] font-semibold text-[0.65rem] text-success leading-[1.75rem]">
                              GP
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="mb-[1.4px] font-semibold text-[0.813rem]">
                              George Pieterson
                            </p>
                            <p className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                              george.pieterson@gmail.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem]">
                            $3,894
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-wrap items-top">
                          <div className="me-2">
                            <span className="inline-flex justify-center items-center bg-primary/10 rounded-full !w-[1.75rem] !h-[1.75rem] font-semibold text-[0.65rem] text-primary leading-[1.75rem]">
                              KA
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="mb-[1.4px] font-semibold text-[0.813rem]">
                              Kiara Advain
                            </p>
                            <p className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                              kiaraadvain214@gmail.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem]">
                            $2,679
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-12 xxl:col-span-12 xl:col-span-12">
                <div className="box">
                  <div className="justify-between box-header">
                    <div className="box-title">Profit Earned</div>
                    <div className="hs-dropdown ti-dropdown">
                      <Link
                        to="#"
                        className="px-2 font-normal text-[#8c9097] text-[0.75rem] dark:text-white/50"
                        aria-expanded="false"
                      >
                        View All
                        <i className="inline-block ri-arrow-down-s-line align-middle ms-1"></i>
                      </Link>
                      <ul
                        className="hidden hs-dropdown-menu ti-dropdown-menu"
                        role="menu"
                      >
                        <li>
                          <Link
                            className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                            to="#"
                          >
                            Today
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                            to="#"
                          >
                            This Week
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                            to="#"
                          >
                            Last Week
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="!py-0 !ps-0 box-body">
                    <div id="crm-profits-earned">
                      <Profitearned />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 xxl:col-span-8 xl:col-span-8">
              <div className="gap-x-6 grid grid-cols-12">
                <div className="col-span-12 xxl:col-span-6 xl:col-span-6">
                  <div className="overflow-hidden box">
                    <div className="box-body">
                      <div className="flex justify-between items-top">
                        <div>
                          <span className="inline-flex justify-center items-center bg-primary !rounded-full !w-[2.5rem] !h-[2.5rem] !text-[0.8rem] !leading-[2.5rem]">
                            <i className="text-[1rem] text-white ti ti-users"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div>
                              <p className="mb-0 text-[#8c9097] text-[0.813rem] dark:text-white/50">
                                Total Customers
                              </p>
                              <h4 className="!mb-2 font-semibold text-[1.5rem]">
                                1,02,890
                              </h4>
                            </div>
                            <div id="crm-total-customers">
                              <Totalcustomers />
                            </div>
                          </div>
                          <div className="flex justify-between items-center !mt-1">
                            <div>
                              <Link
                                className="text-[0.813rem] text-primary"
                                to="#"
                              >
                                View All
                                <i className="inline-block ti-arrow-narrow-right font-semibold ms-2 ti"></i>
                              </Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 font-semibold text-[0.813rem] text-success">
                                +40%
                              </p>
                              <p className="opacity-[0.7] text-[#8c9097] text-[0.6875rem] dark:text-white/50">
                                this month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-6 xl:col-span-6">
                  <div className="overflow-hidden box">
                    <div className="box-body">
                      <div className="flex justify-between items-top">
                        <div>
                          <span className="inline-flex justify-center items-center bg-secondary !rounded-full !w-[2.5rem] !h-[2.5rem] !text-[0.8rem] !leading-[2.5rem]">
                            <i className="text-[1rem] text-white ti ti-wallet"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div>
                              <p className="mb-0 text-[#8c9097] text-[0.813rem] dark:text-white/50">
                                Total Revenue
                              </p>
                              <h4 className="!mb-2 font-semibold text-[1.5rem]">
                                $56,562
                              </h4>
                            </div>
                            <div id="crm-total-revenue">
                              <Totalrevenue />
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <div>
                              <Link
                                className="text-[0.813rem] text-secondary"
                                to="#"
                              >
                                View All
                                <i className="inline-block ti-arrow-narrow-right font-semibold ms-2 ti"></i>
                              </Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 font-semibold text-[0.813rem] text-success">
                                +25%
                              </p>
                              <p className="opacity-[0.7] text-[#8c9097] text-[0.6875rem] dark:text-white/50">
                                this month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-6 xl:col-span-6">
                  <div className="overflow-hidden box">
                    <div className="box-body">
                      <div className="flex justify-between items-top">
                        <div>
                          <span className="inline-flex justify-center items-center bg-success !rounded-full !w-[2.5rem] !h-[2.5rem] !text-[0.8rem] !leading-[2.5rem]">
                            <i className="text-[1rem] text-white ti ti-wave-square"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div>
                              <p className="mb-0 text-[#8c9097] text-[0.813rem] dark:text-white/50">
                                Conversion Ratio
                              </p>
                              <h4 className="!mb-2 font-semibold text-[1.5rem]">
                                12.08%
                              </h4>
                            </div>
                            <div id="crm-conversion-ratio">
                              <Conversionratio />
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <div>
                              <Link
                                className="text-[0.813rem] text-success"
                                to="#"
                              >
                                View All
                                <i className="inline-block ti-arrow-narrow-right font-semibold ms-2 ti"></i>
                              </Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 font-semibold text-[0.813rem] text-danger">
                                -12%
                              </p>
                              <p className="opacity-[0.7] text-[#8c9097] text-[0.6875rem] dark:text-white/50">
                                this month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-6 xl:col-span-6">
                  <div className="overflow-hidden box">
                    <div className="box-body">
                      <div className="flex justify-between items-top">
                        <div>
                          <span className="inline-flex justify-center items-center bg-warning !rounded-full !w-[2.5rem] !h-[2.5rem] !text-[0.8rem] !leading-[2.5rem]">
                            <i className="text-[1rem] text-white ti ti-briefcase"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <div>
                              <p className="mb-0 text-[#8c9097] text-[0.813rem] dark:text-white/50">
                                Total Deals
                              </p>
                              <h4 className="!mb-2 font-semibold text-[1.5rem]">
                                2,543
                              </h4>
                            </div>
                            <div id="crm-total-deals">
                              <Totaldeals />
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <div>
                              <Link
                                className="text-[0.813rem] text-warning"
                                to="#"
                              >
                                View All
                                <i className="inline-block ti-arrow-narrow-right font-semibold ms-2 ti"></i>
                              </Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 font-semibold text-[0.813rem] text-success">
                                +19%
                              </p>
                              <p className="opacity-[0.7] text-[#8c9097] text-[0.6875rem] dark:text-white/50">
                                this month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/** Table analytics */}
                <div className="col-span-12 xxl:col-span-12 xl:col-span-12">
                  <div className="box">
                    <div className="justify-between !gap-0 !m-0 box-header">
                      <div className="box-title">Revenue Analytics</div>
                      <div className="hs-dropdown ti-dropdown">
                        <Link
                          to="#"
                          className="px-2 font-normal text-[#8c9097] text-[0.75rem] dark:text-white/50"
                          aria-expanded="false"
                        >
                          View All
                          <i className="inline-block ri-arrow-down-s-line align-middle ms-1"></i>
                        </Link>
                        <ul
                          className="hidden hs-dropdown-menu ti-dropdown-menu"
                          role="menu"
                        >
                          <li>
                            <Link
                              className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                              to="#"
                            >
                              Today
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                              to="#"
                            >
                              This Week
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                              to="#"
                            >
                              Last Week
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="!py-5 box-body">
                      <div id="crm-revenue-analytics">
                        <Revenueanalytics />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 xxl:col-span-3 xl:col-span-12">
          <div className="gap-x-6 grid grid-cols-12">
            <div className="col-span-12 xxl:col-span-12 xl:col-span-12">
              <div className="box">
                <div className="justify-between box-header">
                  <div className="box-title">Leads By Source</div>
                  <div className="hs-dropdown ti-dropdown">
                    <Link
                      aria-label="anchor"
                      to="#"
                      className="flex justify-center items-center bg-light shadow-none !px-2 !py-1 border-light rounded-sm w-[1.75rem] h-[1.75rem] !font-medium !text-[0.8rem] !"
                      aria-expanded="false"
                    >
                      <i className="text-[0.8rem] fe fe-more-vertical"></i>
                    </Link>
                    <ul className="hidden hs-dropdown-menu ti-dropdown-menu">
                      <li>
                        <Link
                          className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                          to="#"
                        >
                          Week
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                          to="#"
                        >
                          Month
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                          to="#"
                        >
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="overflow-hidden box-body">
                  <div className="flex justify-center items-center leads-source-chart">
                    <Sourcedata />
                    <div className="lead-source-value">
                      <span className="block text-[0.875rem]">Total</span>
                      <span className="block font-bold text-[1.5625rem]">
                        4,145
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dark:border-defaultborder/10 grid grid-cols-4 border-t border-dashed">
                  <div className="!p-0 col">
                    <div className="border-e dark:border-defaultborder/10 p-[0.95rem] border-dashed text-center !ps-4">
                      <span className="inline-block crm-lead-legend mb-1 text-[#8c9097] text-[0.75rem] dark:text-white/50 mobile">
                        Mobile
                      </span>
                      <div>
                        <span className="font-semibold text-[1rem]">1,624</span>
                      </div>
                    </div>
                  </div>
                  <div className="!p-0 col">
                    <div className="border-e dark:border-defaultborder/10 p-[0.95rem] border-dashed text-center">
                      <span className="inline-block desktop crm-lead-legend mb-1 text-[#8c9097] text-[0.75rem] dark:text-white/50">
                        Desktop
                      </span>
                      <div>
                        <span className="font-semibold text-[1rem]">1,267</span>
                      </div>
                    </div>
                  </div>
                  <div className="!p-0 col">
                    <div className="border-e dark:border-defaultborder/10 p-[0.95rem] border-dashed text-center">
                      <span className="inline-block laptop crm-lead-legend mb-1 text-[#8c9097] text-[0.75rem] dark:text-white/50">
                        Laptop
                      </span>
                      <div>
                        <span className="font-semibold text-[1rem]">1,153</span>
                      </div>
                    </div>
                  </div>
                  <div className="!p-0 col">
                    <div className="p-[0.95rem] text-center !pe-4">
                      <span className="inline-block crm-lead-legend mb-1 text-[#8c9097] text-[0.75rem] dark:text-white/50 tablet">
                        Tablet
                      </span>
                      <div>
                        <span className="font-semibold text-[1rem]">679</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 xxl:col-span-12 xl:col-span-6">
              <div className="box">
                <div className="justify-between box-header">
                  <div className="box-title">Deals Status</div>
                  <div className="hs-dropdown ti-dropdown">
                    <Link
                      to="#"
                      className="px-2 font-normal text-[#8c9097] text-[0.75rem] dark:text-white/50"
                      aria-expanded="false"
                    >
                      View All
                      <i className="inline-block ri-arrow-down-s-line align-middle ms-1"></i>
                    </Link>
                    <ul
                      className="hidden hs-dropdown-menu ti-dropdown-menu"
                      role="menu"
                    >
                      <li>
                        <Link
                          className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                          to="#"
                        >
                          Today
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                          to="#"
                        >
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block !px-[0.9375rem] !py-2 !font-medium !text-[0.8125rem] ti-dropdown-item"
                          to="#"
                        >
                          Last Week
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <div className="flex items-center mb-[0.8rem]">
                    <h4 className="mb-0 font-bold text-[1.5rem]">4,289</h4>
                    <div className="ms-2">
                      <span className="bg-success/10 px-[0.45rem] py-[0.18rem] rounded-sm !font-medium !text-[0.75em] text-success">
                        1.02
                        <i className="ri-arrow-up-s-fill align-mmiddle ms-1"></i>
                      </span>
                      <span className="text-[#8c9097] text-[0.813rem] dark:text-white/50 ms-1">
                        compared to last week
                      </span>
                    </div>
                  </div>

                  <div className="flex mb-6 rounded-full w-full h-[0.3125rem] overflow-hidden">
                    <div
                      className="flex flex-col justify-center bg-primary rounded-s-[0.625rem] w-[21%] overflow-hidden"
                      style={{ width: "21%" }}
                      aria-valuenow={21}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                    <div
                      className="flex flex-col justify-center bg-info rounded-none w-[26%] overflow-hidden"
                      style={{ width: "26%" }}
                      aria-valuenow={26}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                    <div
                      className="flex flex-col justify-center bg-warning rounded-none w-[35%] overflow-hidden"
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                    <div
                      className="flex flex-col justify-center bg-success rounded-e-[0.625rem] w-[18%] overflow-hidden"
                      style={{ width: "18%" }}
                      aria-valuenow={18}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <ul className="crm-deals-status mb-0 pt-2 list-none">
                    <li className="primary">
                      <div className="flex justify-between items-center text-[0.813rem]">
                        <div>Successful Deals</div>
                        <div className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                          987 deals
                        </div>
                      </div>
                    </li>
                    <li className="info">
                      <div className="flex justify-between items-center text-[0.813rem]">
                        <div>Pending Deals</div>
                        <div className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                          1,073 deals
                        </div>
                      </div>
                    </li>
                    <li className="warning">
                      <div className="flex justify-between items-center text-[0.813rem]">
                        <div>Rejected Deals</div>
                        <div className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                          1,674 deals
                        </div>
                      </div>
                    </li>
                    <li className="success">
                      <div className="flex justify-between items-center text-[0.813rem]">
                        <div>Upcoming Deals</div>
                        <div className="text-[#8c9097] text-[0.75rem] dark:text-white/50">
                          921 deals
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-50 fixed inset-0 hidden bg-gray-900 bg-opacity-50 dark:bg-opacity-80 opacity-0 transition"></div>
    </Fragment>
  );
};

export default Crm;
