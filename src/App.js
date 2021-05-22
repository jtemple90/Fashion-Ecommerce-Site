import React from 'react';
import { Switch, Route } from 'react-router-dom'
//Layouts
import MainLayout from './layouts/MainLayout'
import HomePageLayout from './layouts/HomePageLayout'

// import Header from './components/Header';
import Homepage from './components/Pages/Homepage';
import Registration from './components/Pages/Registration';
import './default.scss';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
    <div className="main">
    <Switch>
      <Route exact path='/' render={() => (
        <HomePageLayout>
          <Homepage/>
        </HomePageLayout>
      )}/>
      <Route path='/registration' render={() => (
        <MainLayout>
          <Registration/>
        </MainLayout>
      )}/>

    </Switch>

    </div>
    </div>
  );
}

export default App;
