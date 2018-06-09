import React from "react";
import { Grid, InputLabel, MenuItem, Select } from "material-ui";
import { RegularCard, Button, ItemGrid, CustomInput } from "components";
import members from "variables/members";

class UserProfile extends React.Component {
  state = {
    infracter: "",
    covenant: ""
  };

  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Complaint Form"
              cardSubtitle="Use this form to submit a complaint which will be addressed during the next HOA meeting."
              content={
                <div>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
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
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={12}>
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
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="Do you have any additional comments?"
                        id="additional-comments"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 1,
                          value: ""
                        }}
                      />
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

  setInfracter = event => {
    this.setState({ infracter: event.target.value });
  };

  setCovenant = event => {
    this.setState({ covenant: event.target.value });
  };
}

export default UserProfile;
