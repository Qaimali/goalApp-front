import React, { Component } from "react";
import "../App.scss";
import CreateTask from "../components/createTask";
import TaskItem from "../components/TaskItem";
import { Card } from "semantic-ui-react";
import TaskList from "../components/TaskList";
import { connect } from "react-redux";
import {
  addtasks,
  fetchTasks,
  removetasks,
  editTasks,
  editStatus,
} from "../store/actions/todo";
const mapStateToProps = (state) => {
  //substribe
  
  return {
    todo: state.todo_Reducers.todo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => {
      dispatch(fetchTasks());
    },
    addtasks: (task) => {
      dispatch(addtasks(task));
    },
    removetasks: (task) => {
      dispatch(removetasks(task));
    },
    editTasks: (taskId, task) => {
      dispatch(editTasks(taskId, task));
    },
    editStatus: (taskId, isDone) => {
      dispatch(editStatus(taskId, isDone));
    },
  };
};
class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: this.props.todo };
  }
  componentDidMount() {
    this.props.fetchTasks();
  }
  componentWillReceiveProps(nextProps) {
    
    if (this.props.todo != nextProps.todo) {
      this.setState({ todo: nextProps.todo });
    }
  }
  render() {
    return (
      <div className="Goals">
        <CreateTask addtasks={this.props.addtasks} />
        <TaskList
          todo={this.state.todo}
          removetasks={this.props.removetasks}
          editTasks={this.props.editTasks}
          editStatus={this.props.editStatus}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Goals);
