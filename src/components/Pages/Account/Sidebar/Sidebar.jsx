import React from "react";
import { BiCog, BiShoppingBag, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {


  return (
    <section id="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-nav">
          <ul className="sidebar-menu p-0">
            <li>
              <Link to='/account/my-details'><BiUserCircle></BiUserCircle> My Details</Link>
            </li>
            <li>
              <Link to='/account/my-order'><BiShoppingBag></BiShoppingBag> My Orders</Link>
            </li>
            <li>
              <Link to='/account/account-settings'><BiCog></BiCog> Account Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
