import React, { Component } from 'react';

import TaskCard from '../Dashboard/Task/TaskCard';
import TaskForm from './Form/TaskForm';
import TaskManager from '../../lib/task';

import './TaskModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: TaskManager.createPreview()
    };
  }

  setPreview(title, category, dateTime, hours) {
    let preview = TaskManager.createInMemoryTask(title, category, dateTime, hours);
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