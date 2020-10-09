import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/User/Login";
import UserPage from "../components/User/UserPage";
import ContactsList from "../components/User/ContactsList";
import AgentsList from "../components/User/AgentsList";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/contacts_list/:zipCode" component={ContactsList} />
        <Route exact path="/agents_list/:zipCode" component={AgentsList} />
        <Route exact path='/user_page/:userId' component={UserPage}/>
      </Switch>
    </>
  );
};

export default AppRoutes;
