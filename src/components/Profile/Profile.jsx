import React, { Component } from "react";
import User from "./User/User";
import DashboardFilter from "./DashboardFilter/DashboardFilter";
import AddTaskButton from "./AddTaskButton/AddTaskButton";
import AddTaskModal from '../Modal/AddTaskModal';

import "./Profile.css";

class Profile extends Component {

  constructor() {
    super();
    this.state = { modal: true }
  }

  handleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <section className="user-profile">
        <div className="profile">
          <User/>
          <div className="profile-buttons">
            <DashboardFilter/>
          </div>
          <AddTaskButton onClick={this.handleModal.bind(this)}/>
          {(this.state.modal) ? <AddTaskModal onClick={this.handleModal.bind(this)}/> : ''}
        </div>
      </section>
    );
  }
}

export default Profile;
