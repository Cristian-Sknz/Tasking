import React, { Component } from 'react';
import Category from '../../../lib/category';
import './DashboardFilter.css';

class DashboardFilter extends Component {

    constructor() {
        super();
        this.state = {
            active: true
        }
    }

    handleTitleClick() {
        this.setState({ active: !(this.state.active) });
    }

    render() {
        return (
        <div className="dashboard-filter">
            <div className="filter-title" onClick={this.handleTitleClick.bind(this)}>Filtrar</div>
            {this.state?.active &&
            <ul className="filter-list">
                {
                Category.values().map((category, index) => {
                    return <li className="filter-item" key={index}>{category.name}</li>
                })
                }
            </ul>
            }
        </div>);
    }
}
 
export default DashboardFilter;