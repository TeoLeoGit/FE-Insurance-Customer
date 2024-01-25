import ManageInsurance from "./Container/System/ManageInsurance";
import DetailInsurance from "./components/DetailInsurance";
import HomePage from "./components/HomePage";
import ListOfInsurance from "./components/ListOfInsurance";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import AccountProfile from "./components/AccountProfile";
import MyInsurance from "./components/MyInsurance";
import { ToastContainer } from "react-toastify";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PaymentRequest from "./components/PaymentRequest";
import { AppProvider } from "./Context/AppContext";
import ManageCustomerInsurance from "./Container/System/ManageCustomerInsurance";
import ManageResponse from "./Container/System/ManageResponse";
import ManageRequestPayment from "./Container/System/ManageResquestPayment";

//import background from ".public/img/placeholder.png";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/listInsurance" component={ListOfInsurance} />
          <Route path="/detailInsurance/:id" component={DetailInsurance} />
          <Route exact path="/manageInsurance" component={ManageInsurance} />
          <Route exact path="/PaymentRequest" component={PaymentRequest} />
          <Route exact path="/accountProfile" component={AccountProfile} />
          <Route exact path="/myInsurance" component={MyInsurance} />
          <Route exact path="/manageResponse" component={ManageResponse} />
          <Route
            exact
            path="/manageRequestPayment"
            component={ManageRequestPayment}
          />
          <Route
            exact
            path="/manageCustomerInsurance"
            component={ManageCustomerInsurance}
          />
        </Switch>
      </Router>
      {/* <RegisterForm/> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover={false}
        rtl={false}
        pauseOnFocusLoss
        closeOnClick
        draggable
        //closeButton={<CustomToastCloseButton />}
      />
    </div>
  );
}

export default App;
