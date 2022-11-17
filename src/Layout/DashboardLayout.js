import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;