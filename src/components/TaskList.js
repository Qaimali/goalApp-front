import React, { Component } from "react";
import TaskItem from "./TaskItem";
export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: this.props.todo };
  }
  
  componentWillReceiveProps(nextProps) {
    
    if (this.props.todo != nextProps.todo) {
      this.setState({ todo: nextProps.todo });
    }
  }
  render() {
    return (
      <div>
        {this.state.todo.map((item) => (
          <TaskItem
            item={item}
            removetasks={this.props.removetasks}
            editTasks={this.props.editTasks}
            editStatus={this.props.editStatus}
          />
        ))}
      </div>
    );
  }
}
