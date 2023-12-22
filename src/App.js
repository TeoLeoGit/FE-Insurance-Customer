import ManageInsurance from "./Container/System/ManageInsurance";
import DetailInsurance from "./components/DetailInsurance";
import HomePage from "./components/HomePage";
import ListOfInsurance from "./components/ListOfInsurance";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import AccountProfile from "./components/AccountProfile";

import { ToastContainer } from "react-toastify";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PaymentRequest from "./components/PaymentRequest";
import Header from "./components/Header";
import Footer from "./components/Footer";

//import background from ".public/img/placeholder.png";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/listInsurance" component={ListOfInsurance} />
          <Route exact path="/detailInsurance" component={DetailInsurance} />
          <Route exact path="/manageInsurance" component={ManageInsurance} />
          <Route exact path="/PaymentRequest" component={PaymentRequest} />
          <Route exact path="/accountProfile" component={AccountProfile} />

        </Switch>
      </Router>
      <Footer />
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
