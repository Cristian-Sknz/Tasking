import React, { Component } from 'react';
import TaskCard from './TaskCard';
import TaskManager from '../../../lib/task';

import './Task.css';

export const TaskContext = React.createContext();

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    TaskManager.register(this.updateTasks.bind(this)).then(() => {
      TaskManager.getLoadedTasks().then((tsk) => {
        this.setState({ tasks: tsk });
      });
    });
  }

  componentWillUnmount() {
    TaskManager.unregister(this.updateTasks.bind(this));
  }

  updateTasks(tasks) {
    this.setState({ ...this.state, tasks: tasks });
  }

  render() {
    return (
      <ul className="tasks">
        {this.state.tasks.map(((task) => <TaskCard data={task} key={task.id} />))}
      </ul>
    );
  }
}

export default Tasks;
