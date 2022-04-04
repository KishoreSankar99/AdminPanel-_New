import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tables from "./Tables";
import CreateUser from "./CreateUser";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
import { UserProvider } from "./UserContext";
import { useState } from "react";
function App() {
  let[name,setName]=useState('hello')
  let[users,setUsers]=useState([])
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{name,setName,users,setUsers}}>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/tables" element={<Tables/>}></Route>
                <Route path="/create-user" element={<CreateUser/>}></Route>
                <Route path="/user-view/:id" element={<UserView/>}></Route>
                <Route path="/user-edit/:id" element={<UserEdit/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
