import React, { useState, useRef } from 'react';
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Day,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  Week,
  Year,
} from '@syncfusion/ej2-react-schedule';

import { Header } from '../components';
import { scheduleData } from '../data/dummy';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

// ... (previous code)

const Calendar = () => {
  // State variables to store Schedule component field values
  const [eventTitle, setEventTitle] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Ref for the Schedule component
  const scheduleRef = useRef(null);

  // Event handler for the 'popupOpen' event
  const onPopupOpen = (args) => {
    // Check if the current action is 'Add' (new event)
    if (args.type === 'Add') {
      // Set initial values or clear the state variables
      setEventTitle('');
      setEventLocation('');
      setStartDate(args.startTime || new Date());
      setEndDate(args.endTime || new Date());
    } else if (args.type === 'Editor') {
      // If editing an existing event, you can set the state variables based on the existing data
      const eventData = args.data || {};
      setEventTitle(eventData.Subject || '');
      setEventLocation(eventData.Location || '');
      setStartDate(eventData.StartTime || new Date());
      setEndDate(eventData.EndTime || new Date());
    }
  };

  // Event handler for the 'eventSave' event
  const onEventSave = (args) => {
    // Access the Schedule component field values from the 'args' object
    const title = eventTitle || args.data.Subject;
    const location = eventLocation || args.data.Location;
    const startDateTime = startDate || args.data.StartTime;
    const endDateTime = endDate || args.data.EndTime;

    // You can now use these values as needed (e.g., save to the database, update state, etc.)
    console.log('Title:', title);
    console.log('Location:', location);
    console.log('Start Date:', startDateTime);
    console.log('End Date:', endDateTime);

    // If you want to perform additional actions, like saving to a database, you can do it here
    // Example: saveEventToDatabase(title, location, startDateTime, endDateTime);
  };

  // Event handler for the ButtonComponent click
  const onButtonClick = () => {
    // Access the Schedule component instance using the ref
    const scheduleInstance = scheduleRef.current;

    // Open the Schedule editor window programmatically
    scheduleInstance.openEditor();
  };

  // Event handler for input field changes
  const onInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'eventTitle':
        setEventTitle(value);
        break;
      case 'eventLocation':
        setEventLocation(value);
        break;
      case 'startDate':
        setStartDate(new Date(value));
        break;
      case 'endDate':
        setEndDate(new Date(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar' />
      <ButtonComponent id='add' title='Add' onClick={onButtonClick}>
        Add
      </ButtonComponent>
      <form>
        <label>
          Event Title:
          <input
            type='text'
            name='eventTitle'
            value={eventTitle}
            onChange={onInputChange}
          />
        </label>
        <br />
        <label>
          Event Location:
          <input
            type='text'
            name='eventLocation'
            value={eventLocation}
            onChange={onInputChange}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type='datetime-local'
            name='startDate'
            value={startDate.toISOString().slice(0, 16)}
            onChange={onInputChange}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type='datetime-local'
            name='endDate'
            value={endDate.toISOString().slice(0, 16)}
            onChange={onInputChange}
          />
        </label>
        <br />
      </form>
      <ScheduleComponent
        ref={scheduleRef}
        currentView='Month'
        height='500px'
        eventSettings={{
          dataSource: scheduleData,
          allowAdding: true,
          allowEditing: true,
        }}
        editSettings={{
          allowAdding: true,
          allowEditing: true,
          allowDeleting: true,
        }}
        popupOpen={onPopupOpen}
        eventSave={onEventSave}
      >
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
          <ViewDirective option='Year' />
        </ViewsDirective>
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Agenda,
            Resize,
            DragAndDrop,
            Year,
          ]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
