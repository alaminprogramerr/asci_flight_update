import Dashboard from "./views/Dashboard.jsx";
import TableList from "./views/TableList.jsx";
import UserProfile from "./views/UserProfile.jsx";
import AddFlight from './views/addFlight/AddFlight'
import EditFlight from './views/EditFlight/EditFlight'
import GenerateInvoice from './views/GenerateInvoice'
import FlightAnalytics from './views/FlightAnalytics'



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
    path: "/edit-flight",
    name: "Edit Flight",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-pencil",
    component: EditFlight,
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
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
];
export default routes;
