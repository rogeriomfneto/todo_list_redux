import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteTodo, checkTodo, uncheckTodo } from "../actions";

class Todo extends React.Component {
  onChange = () => {
    if (this.props.checked) {
      this.props.uncheckTodo(this.props.id);
    } else {
      this.props.checkTodo(this.props.id);
    }
  };

  onClick = () => {
    this.props.deleteTodo(this.props.id);
  };

  render() {
    const lineThrough = { textDecorationLine: "line-through", color: "red" };
    const textStyle = this.props.checked ? lineThrough : null;
    return (
      <Paper
        mt={2}
        component={Box}
        display="flex"
        alignItems="center"
        elevation={5}
      >
        <Checkbox checked={this.props.checked} onChange={this.onChange} />
        <Box minWidth={0} style={{ wordWrap: "break-word" }}>
          <Typography variant="body1" style={textStyle}>
            {this.props.name}
          </Typography>
        </Box>

        <Box justifySelf="end" marginLeft="auto">
          <IconButton onClick={this.onClick}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  checked: state.todos[ownProps.id].checked,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  checkTodo: (id) => dispatch(checkTodo(id)),
  uncheckTodo: (id) => dispatch(uncheckTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
