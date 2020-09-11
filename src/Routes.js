import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Signup from "./user/Signup";
import Signin from "./user/Signin";

import Home3 from "./home/home3";
import { AnimatePresence } from "framer-motion";
import mobileSignup from "./user/mobileSignup";
import mobileLogin2 from "./user/mobilelogin2";
import home from "./homes/home";
import Base from "./home/Base";
import HomeCheck from "./home/homecheck";
import ContactUS from "./user/ContactUs";
import Otppage from "./user/Otppage";
import ShortlistedPage from "./user/ShortlistedPage";
import MyProperty from "./user/MyProperty";
import EditProfile from "./user/EditProfile";
import PostProperty from "./property/PostProperty";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import BtnOtp from "./user/btnotpcomponent";
import Otp from "./user/otpcomponent";
import { isAuthenticated } from "./auth/helper/index";
import GetMobile from "./user/GetMobile";
import Filter from "./home/Filter";
import SingleProperty from "./property/SingleProperty";
import Order from "./home/Order";
import Preview from './property/helper/preview'
import ViewShortlist from './user/viewShortlist'
import ViewProperty from './user/viewProperty'

const Routes = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <PrivateRoute path="/home" exact component={home} />
          <Route path="/signin" exact component={Signin} />

          <Route path="/" exact component={Base} />
          <Route path="/otp" exact component={Otppage} />
          <Route path="/home/contactus" exact component={ContactUS} />
          <Route path="/mobilesignup" exact component={mobileSignup} />
          <Route path="/mobileLogin2" exact component={mobileLogin2} />
          <Route path="/filter" exact component={Filter} />
          <Route path="/order" exact component={Order} />
          <Route path="/home/postproperty/preview" exact component = {Preview}></Route>

          <Route path="/home/shortlist/view" exact component={ViewShortlist}></Route>

          <Route path="/home/myproperty/view" exact component={ViewProperty}></Route>
          <Route
            exact
            path="/api/:propid/viewcard"
            component={SingleProperty}
          />
          <PrivateRoute
            path="/home/shortlisted"
            exact
            component={ShortlistedPage}
          />
          <PrivateRoute path="/home/myproperty" exact component={MyProperty} />
          <PrivateRoute
            path="/home/edit-profile"
            exact
            component={EditProfile}
          />
          <PrivateRoute
            path="/home/postproperty"
            exact
            component={PostProperty}
          />
          <PrivateRoute path="/otp2" exact component={BtnOtp} />
          <PrivateRoute path="/checkotp" exact component={Otp} />
          <PrivateRoute path="/emailotp" exact component={GetMobile} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
};
export default Routes;
