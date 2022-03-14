import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (

      <nav>
        <Link to="/" className="btn btn-outline-dark bg-light">Home</Link>
        <Link to="/cities" className="btn btn-outline-dark bg-light">Cities</Link>
        <Link to="/locations" className="btn btn-outline-dark bg-light">Locations</Link>
        <Link to="/events" className="btn btn-outline-dark bg-light">Events</Link>
      </nav>
  )
}
