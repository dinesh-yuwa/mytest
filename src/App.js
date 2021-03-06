import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './page/shop/shop.component';
import Header from './component/header/header.component';
function App() {
  return (
    <div className="App"> 
      <Header/>     
      <Switch>
      <Route exact  path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />

      </Switch>
      
     
    </div>
  );
}

export default App;
