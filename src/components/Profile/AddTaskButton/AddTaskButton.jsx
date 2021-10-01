import React, { Component } from 'react';

class AddTaskButton extends Component {
    render() { 
        return (
        <div className="task-add" onClick={this.props?.onClick}>
            <p>Adicionar Tarefa</p>
        </div>
        );
    }
}
 
export default AddTaskButton;