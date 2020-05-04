import React, { Component } from "react";
import { Input, Form, Message } from "semantic-ui-react";
import "../App.scss";
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      errorMessage: "",
      error: false,
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }
  onSubmit() {
    
    this.props.addtasks(this.state.task);
    this.setState({ task: "" });
  }
  render() {
    return (
      <div className="create-task">
        <Form error={this.state.error} onSubmit={this.onSubmit}>
          <Input
            action={{
              icon: "add",
              type: "submit",
            }}
            className="input-field"
            placeholder="Add Goals..."
            value={this.state.task}
            onChange={this.handleChange}
          />
          {this.state.error && (
            <Message
              error
              header="Error creating player"
              content={this.state.errorMessage}
            />
          )}
        </Form>
      </div>
    );
  }
}
