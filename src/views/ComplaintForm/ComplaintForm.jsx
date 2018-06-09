import React from "react";
import { Grid } from "material-ui";

import {
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

function UserProfile({ ...props }) {
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
                    <CustomInput
                      labelText="Address"
                      id="address"
                      inputProps={{
                        value: '1200 NE 4th St'
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button color="primary">Update Profile</Button>}
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;
