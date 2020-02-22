import Dashboard from "./views/Dashboard.jsx";
import TableList from "./views/TableList.jsx";
import UserProfile from "./views/UserProfile.jsx";
import AddFlight from './views/addFlight/AddFlight'
import EditInternationalFlight from './views/EditFlight/EditInternationalFlight'
import GenerateInvoice from './views/GenerateInvoice'
import FlightAnalytics from './views/FlightAnalytics'
import EditDomesticFlight from "./views/EditFlight/EditDomesticFlight.js";



var routes = [
  {
    path: "/dashboard",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/add-flight",
    name: "Add Flight",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-calendar-60",
    component: AddFlight,
    layout: "/admin"
  },
  {
    path: "/edit-international-flight",
    name: "Edit International Flight",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-pencil",
    component: EditInternationalFlight,
    layout: "/admin"
  },
  {
    path: "/edit-domestic-flight",
    name: "Edit Domestic Flight",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-pencil",
    component: EditDomesticFlight,
    layout: "/admin"
  },
  {
    path: "/invoice-generator",
    name: "Invoice Generator",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-tap-02",
    component: GenerateInvoice,
    layout: "/admin"
  },
  {
    path: "/flight-analytics",
    name: "Flight Analytics",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-send",
    component: FlightAnalytics,
    layout: "/admin"
  }
];
export default routes;
