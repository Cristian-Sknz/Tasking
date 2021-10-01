import moment from "moment";
import React, { Component } from "react";
import Category from "../../../lib/category";
import TaskManager from "../../../lib/task";

class TaskForm extends Component {
  
  handleForm(e) {
    const form = e.target;
    let name = form[0].value;
    let category = form[1].value;
    let date = form[2].value;
    let hours = form[3].value;
    if (!date) {
      date = moment().add(3, "hours");
    } else {
      date = moment(date);
    }

    TaskManager.save(
      TaskManager.toStorageTask({
        title: name,
        category: category,
        createdDate: moment().toISOString(),
        dateTime: moment(date).toISOString(),
        hours: hours,
      })
    );

    this.props.onSubmit();
  }

  handlePreview(e) {
    let form = e.target.form;
    let name = form[0].value;
    let category = form[1].value;
    let date = form[2].value;
    let hours = form[3].value;

    if (!date) {
      date = moment().add(3, "hours");
    } else {
      date = moment(date);
    }
    this.props.setPreview(name, category, date, hours);
  }

  checkDate(date) {
    moment(date.value);
  }

  render() {
    return (
      <form
        className="task-form"
        onReset={this.handleForm.bind(this)}
        onChange={this.handlePreview.bind(this)}
      >
        <div className="form-title">
          <label htmlFor="title" children="Titulo" />
          <input name="title" id="title" />
        </div>
        <div className="form-category">
          <label htmlFor="category" children="Categoria" />
          <select name="category" id="category">
            {Category.values().map((c, index) => {
              return (
                <option value={index} key={index}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-startdate">
          <label htmlFor="startdate" children="Inicio" />
          <input
            name="startdate"
            id="startdate"
            type="datetime-local"
            pattern={"YYYY-MM-DDThh:mm"}
            min={moment().format("YYYY-MM-DDThh:mm")}
            max={moment().add(7, "days").format("YYYY-MM-DDThh:mm")}
          />
        </div>
        <div className="form-endtime">
          <label htmlFor="endtime" children={"Duração"} />
          <input name="endtime" id="endtime" type="time" />
        </div>
        <button className="submit-button" type="reset">
          Adicionar
        </button>
      </form>
    );
  }
}

export default TaskForm;
