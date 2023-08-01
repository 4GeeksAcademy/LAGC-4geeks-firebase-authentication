
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// const username  =useState(username,useState );
export default function Explore() {
    const navigate = useNavigate();

    return (
        <div>
            <label htmlFor="firstname">First Name
            </label>
            <input id="firstname" />
            <label htmlFor="lastname">Last Name
            </label>
            <input id="lastname" />
            <label htmlFor="email">Email
            </label>
            <input id="email" />

            <label htmlFor="password">password
            </label>
            <input id="password" />
        </div>

    )
}