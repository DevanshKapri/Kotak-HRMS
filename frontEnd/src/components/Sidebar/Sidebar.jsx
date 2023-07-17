import React from 'react';
import {Link} from 'react-router-dom';
const Sidebar = () => {
  return (

<div className="sidebar transition overlay-scrollbars">
    <Link to='/dashboard'> <div className="logo">
    <h2 style={{ fontWeight: 700 }} className="mb-0">
      Kotak Admin
    </h2>
  </div></Link>

  <div className="sidebar-items">
    <div className="accordion" id="sidebar-items">
      <ul>
        <p className="menu"><Link to='/hiring'>Hirings</Link></p>
      </ul>
      <ul>
        <p className="menu"><Link to='/employees'>Employees</Link></p>
      </ul>
      <ul>
        <p className="menu"><Link to='/attrition'>Attrition</Link></p>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Sidebar;