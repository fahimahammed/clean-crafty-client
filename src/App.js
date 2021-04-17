import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useEffect, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Shared/Checkout/Checkout';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddService from './components/Dashboard/AddService/AddService';
import ManageService from './components/Dashboard/ManageService/ManageService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Services from './components/Home/Services/Services';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import ServiceContainer from './components/ServiceContainer/ServiceContainer';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/admin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data[0] || 0))
    },[])
    //console.log('app', loggedInUser.email, isAdmin);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/checkout/:id'>
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/services'>
            <ServiceContainer></ServiceContainer>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/add-review'>
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path='/orders/:email'>
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
          <PrivateRoute path='/order-list'>
              <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/manage-service'>
              <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path='/make-admin'>
              <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
