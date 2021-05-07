import React, { useState } from 'react'
import PageHeader from '../PageHeader';
import { 
  makeStyles, 
  Paper 
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import Controls from "../controls/Controls"

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  pageContent:{
    margin: theme.spacing(3),
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(0.5),
  },
}));


export default function SchedulePage() {

  const calendarComponentRef = React.createRef();

  const [calendarWeekends, setCalendarWeekends] = useState(true);
  const [calendarEvents, setCalendarEvents] = useState( [
    // initial event data
    { title: "A WiFi Dock Meeting", 
      start: new Date() }
  ]);

  const toggleWeekends = () => {
    setCalendarWeekends({
      // update a property
      calendarWeekends: !calendarWeekends
    });
  };

  const gotoPast = () => {
    let calendarApi = calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  const handleDateClick = arg => {
    if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      setCalendarEvents(
        // add new event data
        [ ...calendarEvents, {
            // creates a new array
            title: "",
            start: arg.date,
            allDay: arg.allDay
        }]  
      );
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <div className="demo-app">
        {/* <div className="demo-app-top">
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast}>go to a date in the past</button>
          &nbsp; (also, click a date/time to add an event)
        </div> */}
        <Paper className={classes.pageContent}>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={calendarComponentRef}
            weekends={calendarWeekends}
            events={calendarEvents}
            // dateClick={handleDateClick}
          />
        </Paper> 
      </div>
    </div>
    
  )
}
