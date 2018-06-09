import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import avatar from "assets/img/faces/marc.jpg";
import beth from 'assets/img/faces/beth.jpg';
import suzanne from 'assets/img/faces/suzanne.jpg';
import {
  InfoOutline,
  LocalOffer,
  Update,
  AttachMoney,
  AccessTime,
  Accessibility,
  Receipt,
  Warning,
} from "@material-ui/icons";
import { withStyles, Grid, Button } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid,
  ProfileCard,
} from "components";

import {
  poll1data,
  poll2data,
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Receipt}
              iconColor="orange"
              title="Your Dues"
              description="$300"
              statIcon={Warning}
              statIconColor="danger"
              statLink={{ text: "Due June 15th", href: "/dues" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={AttachMoney}
              iconColor="green"
              title="HOA's Available Funds"
              description="$34,245"
              statIcon={Update}
              statText="Last updated today"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Fixed Issues"
              description="75"
              statIcon={LocalOffer}
              statText="Tracked from Github"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Accessibility}
              iconColor="blue"
              title="Community Members"
              description="107"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
        <h3>Board Members</h3>
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
        <h3>Active Polls</h3>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={poll1data.data}
                  type="Bar"
                  options={poll1data.options}
                  responsiveOptions={poll1data.responsiveOptions}
                  listener={poll1data.animation}
                />
              }
              chartColor="orange"
              title="Sign Refurbish Project"
              text="Last Campaign Performance"
              statIcon={AccessTime}
              statText="ends by September 30th"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={poll2data.data}
                  type="Bar"
                  options={poll2data.options}
                  responsiveOptions={poll2data.responsiveOptions}
                  listener={poll2data.animation}
                />
              }
              chartColor="red"
              title="Election - Secretary"
              // text="Last Campaign Performance"
              statIcon={AccessTime}
              statText="ends on July 31st"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
            <TasksCard />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="orange"
              cardTitle="Finances"
              cardSubtitle="Current Ledger"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Date", "Name", "Description", "Amount", "Total"]}
                  tableData={[
                    ["Jan 3, 2018", "Lawnmaster's", "Lawn Service Jan-Mar", "$1500.00", "$45,000" ],
                    ["Mar 9, 2018", "Office Depot", "Office Supplies", "$100", "$44,900" ],
                    ["April 3, 2018", "Lawnmaster's ", "Lawn Service Apr-Jun", "$1500.00", "$43,400"],
                    ["May 18, 2018", "Sunshine Plumbing", "Sprinklers", "$350.00", "$43,050"],
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
