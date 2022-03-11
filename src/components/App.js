import React from "react";
import Cities from "./Cities";
// import {BrowserRouter, Switch, Route} from 'react-router-dom'

class Test extends React.Component{

    render(){
      return (
          <section>
            <h1 class="m-3">List of City, Locations and Events</h1>
            <Cities/>
          </section>
        
      )}
  }

export default Test;