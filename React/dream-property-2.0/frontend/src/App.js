import React from "react";
import  Navbar from "./components/Header/Navbar";
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import PropertyList from './Pages/Home/PropertyList'
import AdminPropertyList from './Pages/Home/AdminPropertyList'
import AdminInquiry from './Pages/Inquiry/AdminInquiry'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import { Provider } from 'react-redux';
import store from './redux/store';
import Signup from "./Pages/Signup-Signin/Signup";
import Signin from "./Pages/Signup-Signin/Signin";
import BuyList from './Pages/PropertyBuy/BuyList'
import RentList from './Pages/PropertyRent/RentList'
import AddProperty from './Pages/AddProperty/AddProperty'
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MyContext from "./util/MyContext";
import Profile from "./Pages/Profile/Profile";
import UserInquiry from "./Pages/Inquiry/UserInquiry";

function App() {

  var logUser = localStorage.getItem('login');
  
  return (
    <>
      <Provider store={store}>
      
      <BrowserRouter>      
      <Navbar/>
      <MyContext>
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/home" element={<PropertyList />} />
          <Route path="/buy" element={<BuyList/>} />
          <Route path="/rent" element={<RentList/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/inq-properties" element={<UserInquiry/>} />
          <Route path="/admin/properties" element={<AdminPropertyList />} />
          <Route path="/admin/add-property" element={<AddProperty/>} />
          <Route path="/admin/inquiries" element={<AdminInquiry />} />
          <Route path="/property/:id" element={<PropertyDetails/>} />
          <Route path="/registration" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route>404 Not found</Route>
        </Routes>
      <Footer/>
      </MyContext>
      </BrowserRouter>
      <ToastContainer />
      </Provider>

    </>
  );
}

export default App;
