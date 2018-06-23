import React from "react";
import {
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { RegularCard } from "components";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  }
};
function ResourceCenter() {
  return (
    <RegularCard
      cardTitle={"Resource Center"}
      cardSubtitle={""}
      content={
        <div>
          <List component="nav">
            <Link to="/resources/foo">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="ByLaw PDF" />
              </ListItem>
            </Link>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>
      }
    />
  );
}

export default withStyles(style)(ResourceCenter);
