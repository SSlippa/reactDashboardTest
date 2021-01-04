import React, { FC, useState } from 'react';
import './App.css'
import SideBar from "./components/side-bar/side-bar";
import SiteHeader from "./components/header/site-header";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";

const App: FC = () => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    function setLoginState(state: boolean) {
        setLoggedIn(state);
    }

  return (
      <div className='App'>

        <SideBar />
        <main className='main'>
            <SiteHeader isLoggedIn={isLoggedIn} logoutHandler={setLoggedIn} />
            {isLoggedIn ? <Dashboard /> : <Login loginHandler={setLoginState} /> }
        </main>
      </div>
  );
};

export default App;
