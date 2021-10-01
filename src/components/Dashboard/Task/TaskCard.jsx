import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import TextFit from 'react-textfit';
import APPTimer from '../../../lib/timing';

class TaskCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: props.data.getTimerString(),
      option: false,
    };
  }

  componentDidMount() {
    APPTimer.subscribe(this, () => {
      this.setState({ ...this.state, duration: this.props.data.getTimerString()});
    });
  }

  componentWillUnmount() {
    APPTimer.unsubscribe(this);
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
