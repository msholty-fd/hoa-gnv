import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "material-ui";

import { Tasks } from "components";

import { bugs } from "variables/general";

import tasksCardStyle from "assets/jss/material-dashboard-react/tasksCardStyle";

class TasksCard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent
          }}
          title="Upcoming Meeting Agenda"
        />
        <CardContent>
          <Typography component="div">
            <Tasks
              checkedIndexes={[0, 3]}
              tasksIndexes={[0, 1, 2, 3]}
              tasks={bugs}
            />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

TasksCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tasksCardStyle)(TasksCard);
