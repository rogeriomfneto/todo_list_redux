import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";

function DownloadButton(props) {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(props.store));
  return (
    <a
      href={dataStr}
      download={props.store.title.replace(/\s+/g, "-") + ".json"}
    >
      <IconButton>
        <GetAppIcon />
      </IconButton>
    </a>
  );
}

const mapStateToProps = (state) => ({
  store: state,
});

export default connect(mapStateToProps)(DownloadButton);
