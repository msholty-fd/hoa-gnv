import React from "react";
import { Grid, Button } from "@material-ui/core";
import avatar from "assets/img/faces/marc.jpg";
import beth from "assets/img/faces/beth.jpg";
import suzanne from "assets/img/faces/suzanne.jpg";

import { RegularCard, Table, ItemGrid, ProfileCard } from "components";

function TableList({ ...props }) {
  return (
    <Grid container>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            subtitle="President"
            title="James Ruffer"
            footer={
              <Button color="primary" round>
                Profile
              </Button>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={beth}
            subtitle="Treasurer"
            title="Beth Herrington"
            footer={
              <Button color="primary" round>
                Profile
              </Button>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={suzanne}
            subtitle="Secretary"
            title="Suzanne Bachus"
            footer={
              <Button color="primary" round>
                Profile
              </Button>
            }
          />
        </ItemGrid>
      </Grid>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Community Members"
          cardSubtitle="Here is a subtitle for this table"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Address", "Spouse", "Profile"]}
              tableData={[
                [
                  "Dakota Rice",
                  "1200 NE 4th St",
                  "Jerry Rice",
                  <Button color="primary">Profile</Button>
                ],
                [
                  "Minerva Hooper",
                  "1443 NE 7th St",
                  "Fred Savage",
                  <Button color="primary">Profile</Button>
                ],
                [
                  "Sage Rodriguez",
                  "1402 NE 4th St",
                  "Lebron James",
                  <Button color="primary">Profile</Button>
                ],
                [
                  "Philip Chaney",
                  "933 NE 9th Ave",
                  "Peter Parker",
                  <Button color="primary">Profile</Button>
                ],
                [
                  "Doris Greene",
                  "430 NE 10th St",
                  "",
                  <Button color="primary">Profile</Button>
                ],
                [
                  "Mason Porter",
                  "882 NE 12 St",
                  "Carrie Porter",
                  <Button color="primary">Profile</Button>
                ]
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default TableList;
