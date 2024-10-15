export const MENUITEMS = [
  {
    menutitle: "MAIN",
  },
  {
    icon: <i className="side-menu__icon bx bx-home"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    dirchange: false,
    title: "Dashboards",
    badge: "",
    class:
      "badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2",
    path: `${import.meta.env.BASE_URL}dashboards`,
  },

  {
    menutitle: "WEB APPS",
  },
  {
    title: "Sales Tracker",
    icon: <i class="bx bx-copy side-menu__icon"></i>,
    type: "link",
    selected: false,
    dirchange: false,
    active: false,
    class:
      "badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2",
    path: `${import.meta.env.BASE_URL}sales-tracker`,
  },
];
