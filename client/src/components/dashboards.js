import Sidebar from "./sidebar/sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Expenses from "../pages/expenses/Expenses";

const Dashboards = () => {
    return (
      <>
          <Sidebar />
          <Expenses />

      </>
    );
  };
  
  export default Dashboards;