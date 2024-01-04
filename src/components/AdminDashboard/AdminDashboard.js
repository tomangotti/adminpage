import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import GetStats from "../hooks/GetStats";

const AdminDashboard = ({ admin, setAdmin }) => {
    const [usersList, recipeList] = GetStats();

    const body = () => {
        if (admin) {
            return (
                <div>
                    <h3>Admin Dashboard</h3>
                    <div>
                        <h2>Users</h2>
                    </div>
                    <div>
                        <h2>Recipes</h2>
                    </div>
                </div>);
        } else {
            return (
                <div>
                <h1>Not Logged in</h1>
                <NavLink to="/admin-login">Please Login</NavLink>
                </div>
            );
            }
        };

    return <div>{body()}</div>;
};

export default AdminDashboard;