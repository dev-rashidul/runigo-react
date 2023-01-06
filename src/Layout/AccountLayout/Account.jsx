import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Pages/Account/Sidebar/Sidebar";
import "./Account.css";

const Account = () => {
  // State for Mobile Sidebar
  const [open, setOpen] = useState(false);

  return (
    <>
      <section>
        <div className="account-wrapper">
          <Container fluid>
            <h2 className="account-title">My Account</h2>
            <div className="account-container">
              <div
                onClick={() => setOpen(!open)}
                className="d-block d-lg-none sidebar-icon"
              >
                {open ? <BiX></BiX> : <BiMenuAltLeft></BiMenuAltLeft>}
              </div>
              <div className={`sidebar ${open ? 'left-0' : 'left-100'}`}>
                <Sidebar></Sidebar>
              </div>
              <div className="account-content">
                <Outlet></Outlet>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Account;
