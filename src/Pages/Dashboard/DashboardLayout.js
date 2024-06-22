import React from 'react';
import Navbar from '../Shared/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='dark:bg-base-100 bg-blue-100'>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='dashboard/myItems'>My Items</Link></li>
                        <li><Link to='dashboard/allUser'>All User</Link></li>
                        <li><Link to='dashboard/addNewItem'>Add New Item</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;