import React from "react";
import { hot } from "react-hot-loader";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Select } from "material-ui";
import FormControl from "@material-ui/core/FormControl";
import members from "variables/members";
import { RegularCard, Button, ItemGrid } from "components";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "50%"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class ComplaintForm extends React.Component {
  state = {
    infracter: "",
    covenant: "",
    comment: ""
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Complaint Form"
              cardSubtitle="Use this form to submit a complaint which will be addressed during the next HOA meeting."
              content={
                <div>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="infracter">
                      Who is the infracting party?
                    </InputLabel>
                    <Select
                      value={this.state.infracter}
                      onChange={this.setInfracter}
                      inputProps={{
                        name: "infracter",
                        id: "infracter"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {members.map(member => [
                        <MenuItem value={member.name}>{member.name}</MenuItem>
                      ])}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="covenant-broken">
                      Covenant Broken
                    </InputLabel>
                    <Select
                      value={this.state.covenant}
                      onChange={this.setCovenant}
                      inputProps={{
                        name: "covenant-broken",
                        id: "covenant-broken"
                      }}
                    >
                      <MenuItem value="a1">
                        <em>A1</em>
                      </MenuItem>
                      <MenuItem value="a2">
                        <em>A2</em>
                      </MenuItem>
                      <MenuItem value="a3">
                        <em>A3</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      id="additional-comments"
                      label="Do you have any additional comments?"
                      className={classes.textField}
                      value={this.state.comment}
                      onChange={e => this.setState({ comment: e.target.value })}
                      margin="normal"
                    />
                  </FormControl>
                </div>
              }
              footer={<Button color="primary">Submit</Button>}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }

  setInfracter = event => {
    this.setState({ infracter: event.target.value });
  };

  setCovenant = event => {
    this.setState({ covenant: event.target.value });
  };
}

export default hot(module)(withStyles(styles)(ComplaintForm));
