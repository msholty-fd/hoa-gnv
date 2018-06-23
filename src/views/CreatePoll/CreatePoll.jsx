import React from "react";
import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import { RegularCard, Button, ItemGrid, CustomInput } from "components";
import TextField from "@material-ui/core/TextField";
import roles from "variables/roles";

class UserProfile extends React.Component {
  state = {
    roles: [],
    question: "",
    answers: ["", ""]
  };

  setAnswer = index => event => {
    const { answers } = this.state;
    answers[index] = event.target.value;
    this.setState({ answers });
  };

  addAnswer = event => {
    this.setState({
      answers: [...this.state.answers, ""]
    });
  };

  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Create a Poll"
              cardSubtitle="Polls are a great way to engage with your community and find out what they think about issues."
              content={
                <div>
                  <Grid container>
                    <ItemGrid
                      xs={12}
                      sm={12}
                      md={12}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <CustomInput
                        labelText="Ask a question..."
                        id="question"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.question,
                          onChange: e =>
                            this.setState({ question: e.target.value })
                        }}
                      />
                      {this.state.answers.map((value, index) => (
                        <CustomInput
                          labelText={`Answer ${index + 1}`}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value,
                            onChange: this.setAnswer(index)
                          }}
                        />
                      ))}
                      <Button color="primary" onClick={this.addAnswer}>
                        Add Answer
                      </Button>
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        defaultValue="2018-08-24"
                        InputLabelProps={{
                          shrink: true
                        }}
                        margin="normal"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <InputLabel htmlFor="roles">
                          Who can participate in this poll?
                        </InputLabel>
                        <Select
                          value={this.state.roles}
                          onChange={this.setRoles}
                          multiple
                          inputProps={{
                            name: "role",
                            id: "role"
                          }}
                        >
                          {roles.map(role => [
                            <MenuItem value={role.name}>{role.name}</MenuItem>
                          ])}
                        </Select>
                      </div>
                    </ItemGrid>
                  </Grid>
                </div>
              }
              footer={<Button color="primary">Submit</Button>}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }

  setRoles = event => {
    this.setState({ roles: event.target.value });
  };
}

export default UserProfile;
