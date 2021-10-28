import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Compagnie des Archers de la Forêt</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>100 pour gagner</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>SpaceX Travel Agency</li>
            </NavLink>
          </ul>
        </li>

        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation