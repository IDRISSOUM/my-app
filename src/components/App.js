import React from "react";
import Cities from "./Cities";
import AddData from "./AddData";
import Home from "./Home";
import Events from "./Events";
import Locations from "./Locations";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import UpdateData from "./UpdateData";
import AddLocations from "./AddLocations";
import AddEvents from "./AddEvents"


class Test extends React.Component{

    render(){
      return (
        <><div class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
          <header>
            <NavBar/>
          </header>
        </div><section>
            {/* <h1 class="m-3">List of City, Locations and Events</h1> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/add-cities" element={<AddData />} />
              <Route path="/:id" element={<UpdateData />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/add-locations" element={<AddLocations />} />
              <Route path="/events" element={<Events />} />
              <Route path="/add-events" element={<AddEvents />} />
            </Routes>
          </section></>
        
      )}
  }

export default Test;