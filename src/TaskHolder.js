import React, { Component } from "react";
import CustomButton from "./CustomButton";
import Dialog from "./Dialog";
import deleteImage from './delete.png';
import logo from './tick.png';
class TaskHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addButtonTitle: "+ Add Task",
      headerTitle: "My Tasks",
      tasks: [{ task: "Buy Groceries", checked: false }, { task: "Fill water", checked: false }, { task: "Pay bills", checked: false }, { task: "Do coding!", checked: false }],
      show: false,
      showTick: false,
    };
  }

  render() {
    return (
      <div
        className="column bg-white shadow-m border-radius-s border-m pt-m pb-m pl-m pr-m"
        style={{ height: 500, width: 400, text_decoration: 'line-through', }}
      >
        <div className="row-reverse ">
          <CustomButton
            title={this.state.addButtonTitle}
            handler={this.addTaskButtonClicked}
          />
        </div>
        <div className="fw-b fs-m">{this.state.headerTitle}</div>
        {this.renderAllTasks()}
        {this.state.show && <Dialog handleDialogClick={this.dialogResponse} />}
      </div>
    );
  }

  renderAllTasks() {
    return (
      <div>
        {[...this.state.tasks].reverse().map((obj, i) => {
          return this.getTaskRowDiv(obj, i);
        })}
      </div>
    );
  }

  addTaskButtonClicked = () => {
    this.setState({
      show: true,
    });
  };
  dialogResponse = (task) => {
    this.setState({
      show: false,
      tasks: [...this.state.tasks, { task: task, checked: false }]
    });
  };

  getTaskRowDiv(task) {
  return(
      <div className={`parent-width fs-l mt-l align-items-start row ${task.checked ? 'text-gray' : ''}`}>
        {this.getCheckBoxDiv(task)}
      {task.task}
        {this.getDeleteDiv(task)}
      </div>
    );
  }

  getCheckBoxDiv(task) {
    return (
      task.checked ?
        this.getCheckboxChecked(task) :
        <div
          className="border-m border-radius-s bg-gray1 mr-s"
          style={{ padding: 8 }}
          onClick={() => this.handleCheckboxClick(task)}>
        </div>
    );
  }
  getDeleteDiv(task) {
    return (
      <div className="mr-s" onClick={() => this.handleDeleteClick(task)}>
        <img src={deleteImage} alt="" className="cursor-hand" style={{ height: 15, width: 18,position:"absolute",left:"70rem" }} />
      </div>
    );
  }
  handleDeleteClick(task) {
    var array = [...this.state.tasks]
    var index = array.indexOf(task)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({tasks: array});
    }
  }
  getCheckboxChecked(task) {
    return (
      <div className="mr-s" onClick={() => this.handleCheckboxClick(task)}>
        <img src={logo} alt="" style={{ height: 15, width: 18 }} />
      </div>
    );
  }
  handleCheckboxClick(task) {
    var taskArray = this.state.tasks.filter(item => {
      if (task.task == item.task) item.checked = !task.checked
      return task;
    })
    this.setState({
      tasks: taskArray
    })
  }
}

export default TaskHolder;
