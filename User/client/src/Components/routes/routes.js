import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Provider} from "react-redux";
import store from "../../Store";
import About from "../../umesh/pages/aboutUs/About Us";
import User from "../../umesh/user";
import Admin from "../../umesh/admin";
import Employee from "../../umesh/employee";
import Login from "../../umesh/pages/login/login";
import Profile from "../../umesh/pages/profile/profile";
import Forgot from "../../umesh/pages/forgot/forgot";
import Register from "../../umesh/pages/register/register";
import AdminEditUser from "../../umesh/pages/admin/AdminEditUser";
import GetAllUsers from "../../umesh/pages/admin/getAllUser";
import AdminRegister from "../../umesh/pages/admin/adminAddEmployee";
import Reset from "../../umesh/pages/reset/reset";
import ConfirmEmail from "../../Actions/confirmEmail";
import Homepage from "../../umesh/Homepage";
import ContactUs from "../../umesh/pages/ContactUs/contactUs";


function Routes() {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route>
                            {/* Umesh Routes */}
                            <Route path="/" component={Homepage} exact/>
                            <Route path="/about" component={About} />
                            <Route path="/contactUs" component={ContactUs} />
                            <Route path="/user" component={User} />
                            <Route path="/admin" component={Admin} />
                            <Route path="/employee" component={Employee} />

                            <Route path="/login" component={Login} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/forgot" component={Forgot} />
                            <Route path="/register" component={Register} />

                            <Route path="/edit_user/:id" component={AdminEditUser} />
                            <Route path="/getAll" component={GetAllUsers} />
                            <Route path="/adminReg" component={AdminRegister} />

                            <Route path="/users/reset_password/:id" component={Reset}/>
                            <Route path="/users/activate/:auth_token" component={ConfirmEmail}/>

                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default Routes;
