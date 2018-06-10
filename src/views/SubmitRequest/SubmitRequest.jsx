import React from "react";
import { hot } from "react-hot-loader";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Select } from "material-ui";
import FormControl from "@material-ui/core/FormControl";
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

class SubmitRequest extends React.Component {
  state = {
    type: "",
    requestText: ""
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
                    <InputLabel htmlFor="infracter">Request Type</InputLabel>
                    <Select
                      value={this.state.type}
                      onChange={this.setType}
                      inputProps={{
                        name: "type",
                        id: "type"
                      }}
                    >
                      <MenuItem value="">
                        <em>General Inquiry</em>
                      </MenuItem>
                      <MenuItem value="">
                        <em>Repair</em>
                      </MenuItem>
                      <MenuItem value="">
                        <em>Architectural Approval</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      id="additional-comments"
                      label="Explain your request here"
                      className={classes.textField}
                      value={this.state.requestText}
                      onChange={this.setRequestText}
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

  setType = event => {
    this.setState({ type: event.target.value });
  };

  setRequestText = event => {
    this.setState({ requestText: event.target.value });
  };
}

export default hot(module)(withStyles(styles)(SubmitRequest));
