import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";

import ToDo from "./ToDo";

class ToDos extends React.Component {
  render() {
    return (
      <Box>
        {this.props.ToDos.map((todo) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  ToDos: Object.values(state.todos),
});

const mapDistpatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDistpatchToProps)(ToDos);
