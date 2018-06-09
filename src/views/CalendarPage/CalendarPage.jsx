import React from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
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

export default CalendarPage;
