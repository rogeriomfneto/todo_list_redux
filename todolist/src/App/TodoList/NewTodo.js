import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { addTodo } from "../actions";

class NewTodo extends React.Component {
  state = {
    input: "",
  };

  onChange = (event) => {
    const val = event.target.value;
    this.setState({
      input: val,
    });
  };

  newTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({
      input: "",
    });
  };

  detectEnter = (event) => {
    if (event.key === "Enter") {
      this.newTodo();
    }
  };

  render() {
    return (
      <Box mt={4}>
        <TextField
          value={this.state.input}
          onChange={this.onChange}
          placeholder="Insira um novo To Do"
          onKeyDown={this.detectEnter}
          size="small"
        />
        <Button onClick={this.newTodo}>Adicionar</Button>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (name) => dispatch(addTodo(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
