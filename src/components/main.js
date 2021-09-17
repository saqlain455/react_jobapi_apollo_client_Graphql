import React from 'react'
import {Switch,BrowserRouter, Route} from 'react-router-dom';
import JobWrapper from '../wrapper/jobWrapper';
import Description from './description';
import SearchByCountyName from './searchByCountryName';
function Main() {

  return (
    <main>
        <Switch>
            <Route  exact path='/' component={JobWrapper}/>
            <Route path='/description' component={Description}/>
            <Route path='/searchbycountry' component={SearchByCountyName}/>
        </Switch>
    </main>
  );
}

    function Home() {
        return (
            <h1>i am home</h1>
        );
    }


export default Main;