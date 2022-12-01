import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";
import ContactMe from "../components/ContactMe";

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <div className="footer--container">
                <div className="footer--contact-container">
                    <ContactMe />
                </div>
            </div>
        </>
    )
}