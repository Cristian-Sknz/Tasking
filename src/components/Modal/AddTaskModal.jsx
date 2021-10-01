import React, { Component } from 'react';
import moment from 'moment';

import TaskCard from '../Dashboard/Task/TaskCard';
import TaskForm from './Form/TaskForm';
import TaskManager from '../../lib/task';

import './TaskModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: TaskManager.toStorageTask({
        title: "Preview",
        category: 0,
        createdDate: moment().toISOString(),
        dateTime: moment().add(3, "hours").toISOString(),
        hours: "01:00",
      }),
    };
  }

  setPreview(title, category, dateTime, hours) {
    let preview = TaskManager.toStorageTask({
      title: title,
      category: category,
      createdDate: moment().toISOString(),
      dateTime: dateTime,
      hours: hours,
    });
    this.setState({ preview: preview });
  }

  render() {
    return (
      <section className="modal taskmodal">
        <div className="taskmodal-body">
          <div className="modal-close" onClick={this.props.onClick}>
            <FontAwesomeIcon icon={['fas', 'times']}/>
          </div>
          <div className="taskmodal-form">
            <TaskForm setPreview={this.setPreview.bind(this)} onSubmit={this.props.onClick}/>
          </div>

          <div className="taskmodal-preview">
            <TaskCard data={this.state.preview} />
          </div>
        </div>
      </section>
    );
  }
}
 
export default AddTaskModal;