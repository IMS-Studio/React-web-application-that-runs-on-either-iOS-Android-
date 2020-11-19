import React, { useState } from 'react';
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import {store, persistor} from './redux'
import VideoList from './components/VideoList';
import AboutUs from './components/AboutUs';
// import './App.css';
import './flexbox.css';

function App() {
    const [ currentTab, selectCurrentTab ] = useState('1');

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        // document.body.style.backgroundColor = "white";
    }

    const giveHanlder = () => {
        closeNav()
        window.location.href = 'https://www.cbn.com/giving/700club/contribute.aspx'
        // window.open('https://www.cbn.com/giving/700club/contribute.aspx', '_blank');
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.Fragment>
              <div id="mySidenav" className="sidenav">
                  <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                  <a href="javascript:void(0)" onClick={() => { closeNav(); selectCurrentTab('1')}} >HOME</a>
                  <a href="javascript:void(0)" onClick={() => { closeNav(); selectCurrentTab('2')}} >ABOUT US</a>
                  <a href="javascript:void(0)" onClick={() => giveHanlder()} >GIVE</a>
              </div>
              <div id="main">
                  <header>
                      <span style={{fontSize: '16px', cursor: 'pointer'}} onClick={() => openNav()}>&#9776; MENU</span>
                  </header>
                  {currentTab === '1' && <VideoList w3_open={() => openNav()} />}
                  {currentTab === '2' && <AboutUs w3_open={() => openNav()} /> }
              </div>
          </React.Fragment>
        </PersistGate>
      </Provider>
    );
}

export default App;
