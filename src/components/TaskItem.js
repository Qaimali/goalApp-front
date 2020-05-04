import React, { Component } from "react";
import "../App.scss";
import { Card, Input } from "semantic-ui-react";
import {
  MdDelete,
  MdCheckBox,
  MdEdit,
  MdCheckBoxOutlineBlank,
  MdDone,
  MdClose,
} from "react-icons/md";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      isDone: this.props.item.isDone,
      task: this.props.item.task,
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleTaskCompletion = this.handleTaskCompletion.bind(this);
    this.hanldeTask = this.hanldeTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    
    this.setState({ isDone: nextProps.item.isDone, task: nextProps.item.task });
  }
  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }
  handleTaskCompletion() {
    this.props.editStatus(this.props.item.id, !this.state.isDone);
  }
  hanldeTask(e) {
    this.setState({ task: e.target.value });
  }
  handleDelete() {
    this.props.removetasks(this.props.item.id);
  }
  handleEdit() {
    this.setState({ editMode: false });
    if (this.state.task != this.props.item.task) {
      this.props.editTasks(this.props.item.id, this.state.task);
    }
  }
  render() {
    return (
      <div className="ui-card">
        <div className="icons" onClick={this.handleTaskCompletion}>
          {this.state.isDone ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div className="tasks">
          {this.state.editMode && (
            <Input
              value={this.state.task}
              onChange={this.hanldeTask}
              placeholder="Search..."
            />
          )}
          {!this.state.editMode && (
            <p className={this.state.isDone ? "completed" : ""}>
              {this.state.task}
            </p>
          )}
        </div>
        {!this.state.editMode && (
          <div className="icons" onClick={this.toggleEditMode}>
            <MdEdit />
          </div>
        )}
        {this.state.editMode && (
          <div className="icons" onClick={this.handleEdit}>
            <MdDone />
          </div>
        )}
        {!this.state.editMode && (
          <div className="icons" onClick={this.handleDelete}>
            <MdDelete />
          </div>
        )}
        {this.state.editMode && (
          <div
            className="icons"
            onClick={() => {
              this.setState({ editMode: false, task: this.props.item.task });
            }}
          >
            <MdClose />
          </div>
        )}
      </div>
    );
  }
}
