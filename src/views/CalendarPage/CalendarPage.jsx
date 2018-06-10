import React from "react";
import Calendar from "react-big-calendar";
import { hot } from "react-hot-loader";
import moment from "moment";
import { Button } from "@material-ui/core";
import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class CalendarPage extends React.Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(),
        title: "Board Meeting"
      },
      {
        start: new Date(moment("2018/06/23")),
        end: new Date(moment("2018/06/23")),
        title: "Community Garage Sale"
      }
    ]
  };
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 10
          }}
        >
          <Button color="primary" variant="contained">
            Create New Event
          </Button>
        </div>
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default hot(module)(CalendarPage);
