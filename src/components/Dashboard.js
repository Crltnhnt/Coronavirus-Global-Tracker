import React from 'react';

import Global from './Global';
import Country from './Country';
import History from './History';

const Dashboard = () => {
    return (
        <div className='container mt-2'>
            <div className='row mb-3 mt-3'>
                <div className='col-12'>
                    <h3 className='text-left'>History (Global)</h3>
                    <hr />
                </div>
                <div className='col-12'>
                    <History />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-12 mb-2'>
                    <h3 className='text-left'>Global Stats</h3>
                    <hr />
                </div>
                <div className='col-12'>
                    <Global />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 mb-2'>
                    <h3 className='text-left'>Country Specific Stats</h3>
                    <hr />
                </div>
                <div className='col-12'>
                    <Country />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;