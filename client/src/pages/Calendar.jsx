import React from 'react';
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

import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Header } from '../components';
import { scheduleData } from '../data/dummy';

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar' />

      <ScheduleComponent
        height='500px'
        eventSettings={{
          dataSource: scheduleData,
        }}
      >
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
