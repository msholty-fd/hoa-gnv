import React from "react";
import { Grid } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";
import Maps from "views/Maps/Maps.jsx";

import avatar from "assets/img/faces/marc.jpg";

function UserProfile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="Edit Profile"
            cardSubtitle="Complete your profile"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Title"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true,
                        value: 'President'
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={3}>
                    <CustomInput
                      inputProps={{
                        value: 'jruffer'
                      }}
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      inputProps={{
                        value: 'jruffer@gmail.com'
                      }}
                      id="email-address"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      inputProps={{
                        value: 'James'
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      inputProps={{
                        value: 'Ruffer'
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
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
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      inputProps={{
                        value: 'Gainesville'
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      inputProps={{
                        value: 'USA'
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      inputProps={{
                        value: '32601'
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="About me"
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 1,
                        value: 'I am an avid fishing enthusiast. My favorite food is pizza.'
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button color="primary">Update Profile</Button>}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            subtitle="President"
            title="James Ruffer"
            description="I am an avid fishing enthusiast. My favorite food is pizza."
            footer={
              <Button color="primary" round>
                Follow
              </Button>
            }
          />
          <Maps />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;
