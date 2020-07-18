import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";

import { uploadList } from "../actions";

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFile = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      this.props.uploadList(contents);
    };

    reader.onerror = () => {
      console.error("Error reading file");
    };

    reader.readAsText(file);
  };

  onChange = (event) => {
    const file = event.target.files[0];
    this.handleFile(file);
  };

  onClick = () => {
    this.inputRef.current.click();
  };

  render() {
    return (
      <React.Fragment>
        <IconButton onClick={this.onClick}>
          <PublishIcon />
        </IconButton>
        <input
          type="file"
          onChange={this.onChange}
          style={{ display: "none" }}
          ref={this.inputRef}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  uploadList: (newList) => dispatch(uploadList(newList)),
});

export default connect(null, mapDispatchToProps)(UploadButton);
