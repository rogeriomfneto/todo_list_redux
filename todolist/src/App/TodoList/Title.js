import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { setTitle } from "../actions";

class Title extends React.Component {
  state = {
    editName: false,
    title: this.props.title,
  };

  toggleEditName = () => {
    this.setState((state) => ({
      editName: !state.editName,
    }));
  };

  newTitle = (event) => {
    const val = event.target.value;
    this.toggleEditName();
    this.setState((state) => {
      this.props.setTitle(val);
    });
  };

  detectEnter = (event) => {
    if (event.key === "Enter") {
      this.newTitle(event);
    }
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.editName && (
          <Typography variant="h5" component="h1" onClick={this.toggleEditName}>
            {this.props.title}
          </Typography>
        )}
        {this.state.editName && (
          <TextField
            autoFocus
            defaultValue={this.props.title}
            variant="outlined"
            placeholder="Insira o novo título"
            onKeyDown={this.detectEnter}
            onBlur={this.newTitle}
            size="small"
            style={{ width: "200px" }}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.title,
});

const mapDistpatchToProps = (dispatch) => ({
  setTitle: (title) => dispatch(setTitle(title)),
});

export default connect(mapStateToProps, mapDistpatchToProps)(Title);
