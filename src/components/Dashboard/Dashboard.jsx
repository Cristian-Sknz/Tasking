import React, { Component } from 'react';
import Tasks from './Task/Tasks';
import './Dashboard.css';

class Dashboard extends Component {

    render() { 
        return (
        <section className="dashboard">
            <div className="taskboard">
                <Tasks/>
            </div>
        </section>
        );
    }
}
 
export default Dashboard;