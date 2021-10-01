import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import TextFit from 'react-textfit';

class TaskCard extends Component {

  interval;

  constructor(props) {
    super(props);
    this.state = {
      duration: props.data.getTimerString(),
      option: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newDuration = this.props.data.getTimerString();
      if (this.state.duration !== newDuration) {
        this.setState({ ...this.state, duration: newDuration});
      }
    }, 1000);
  }

  componentDidUpdate() {
    let data = this.props.data;
    if (data.isExpired() && !this.interval) {
      this.setState({ ...this.state, duration: data.getTimerString() });
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    if (!this.interval)
      clearInterval(this.interval);
  }

  handleTaskOptions() {
    this.setState({ ...this.state, option: !this.state.option });
  }

  handleRemoveCard() {
    this.props.data.delete();
  }

  render() {
    return (
      <li className={`task ${this.props?.data.category.style}`}>
        <div className="task-body">
          <header className="task-header">
            <p className="task-category">{this.props?.data.category.name}</p>
            <div className="task-options">
              <FontAwesomeIcon
                onClick={this.handleTaskOptions.bind(this)}
                icon={["fas", "ellipsis-h"]}
                className="option-icon"
              />
              <ul className={`options-list${this.state.option ? " active" : ""}`}>
                <li className="task-option" onClick={this.handleRemoveCard.bind(this)}>Deletar</li>
              </ul>
            </div>
          </header>
          <section className="task-content">
            <div className="task-title">{this.props?.data.title}</div>
            <TextFit
              className="time-remaining"
              mode="single"
              forceSingleModeWidth={true}
              max={45}>
              <h2>{this.state.duration}</h2>
            </TextFit>
            <div className={`task-state ${this.props?.data.state[0]}`}>{this.props?.data.state[1]}</div>
          </section>
          <div className="task-footer">
            <div className="task-createddate" title={this.props.data.createdDate.calendar()}>
              {"há " + this.props.data.getDateAgo().humanize()}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default TaskCard;
