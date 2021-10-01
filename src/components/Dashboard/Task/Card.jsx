import React, { Component } from "react";
import TextFit from 'react-textfit';

class TaskCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: null,
      started: false
    }
  }

  componentDidMount() {
    let taskObject = this.props.dataobject;
    let interval = setInterval(() => {
      if (taskObject.isExpired()) {
        clearInterval(interval);
      }
      this.setState({
        duration: (taskObject.isActive()) ? taskObject.getActiveDuration().duration : taskObject.getDurationFromNow().duration
      });
    }, 1000)
  }

  remainTime() {
    if (!this.state.duration) {
      return '0m';
    }
    let duration = this.state.duration;
    if (duration.hours() !== 0) {
      return `${duration.hours()}h ${duration.minutes()}m`
    }
    return `${duration.minutes()}m${duration.seconds()}s`
  }

  render() {
    return (
      <li className={`task ${this.props?.dataobject.category.style}`}>
        <div className="task-body">
          <header className="task-header">
            <p className="task-category">{this.props?.dataobject.category.name}</p>
          </header>
          <section className="task-content">
            <div className="task-title">{this.props?.data.title}</div>
            <TextFit
              className="time-remaining"
              mode="single"
              forceSingleModeWidth={true}
              max={45}
            >
              <h2>{this.remainTime()}</h2>
            </TextFit>
          </section>
          <div className="task-footer">
            <div className="task-createddate" title={new Date()}>
              {
                "há " + this.props.dataobject.getCreatedDuration().humanize()
              }</div>
          </div>
        </div>
      </li>
    );
  }
}

export default TaskCard;
