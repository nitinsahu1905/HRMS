"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './style.css';
import { AttendanceData } from '@/app/Constants/AttendanceData';

const Calendar = () => {
    // const handleDateClick = (info) => {
    //     alert(`Clicked date: ${info.dateStr}`);
    //   };

      // function renderEventContent(eventInfo) {
      //   return(
      //     <>
      //       <b>{eventInfo.timeText}</b>
      //       <i>{eventInfo.event.title}</i>
      //     </>
      //   )
      // }

      // const sampleData = [
      //   { date: '2024-05-01', status: 'Present', location: 'Office', shift: 'Day' },
      //   { date: '2024-05-02', status: 'Absent' },
      //   { date: '2024-05-03', status: 'Holiday' },
      //   { date: '2024-05-21', status: 'Holiday' },
      //   // Add more data as needed
      // ];


      const events = AttendanceData.map((item) => {
        return { title: item.status, date: item.date, extendedProps: { location: item.location, shift: item.shift } };
      });

      const renderEventContent = (eventInfo) => {
        let bgColor = '';
        let textcolor='';
        switch (eventInfo.event.title) {
          case 'Present':
            bgColor = 'white';
            textcolor='#0683c6';
            break;
          case 'Absent':
            bgColor = '#ffe3e3';
            textcolor='#810707'
            break;
          case 'Holiday':
            bgColor = '#fcebac';
            textcolor='#835F04';
            break;
          default:
            bgColor = 'gray';
        }
        return (
          <div className="font-medium text-xs" style={{ backgroundColor: bgColor, padding: '5px', borderRadius: '3px', color: textcolor, textAlign: 'center',height:'100%' ,width:'100%'}}>
            {eventInfo.event.title}
            {eventInfo.event.title === 'Present' && (
              <div className='flex flex-row justify-between pt-6'>
                <div className='text-grey-color'>{eventInfo.event.extendedProps.location}</div>
                <div className='text-grey-color'> {eventInfo.event.extendedProps.shift}</div>
              </div>
            )}
          </div>
        );
      };



      const dayCellContent = (info) => {
        if (info.date.getDay() === 6 || info.date.getDay() === 0) { // 6 = Saturday, 0 = Sunday
          return (
            <>
              <div className='text-grey-color text-right'>{info.dayNumberText}</div>
              <div className='text-grey-color py-4 px-10 '>Week off</div>
            </>
          );
        }
        return info.dayNumberText; // Return the default day number for other days
      };
        
  return (
    <div className='bg-white rounded-[15px] '>
      <FullCalendar
      className='tailwind-scrollbar-hide w-full h-full'
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      weekends={true}
      events={events}
      eventContent={renderEventContent}
      // events={[
      //   { title: 'Holiday', date: '2024-05-21' },
      //   { title: 'Office', date: '2024-05-02' }
      // ]}
      // dateClick={handleDateClick}
      // eventContent={renderEventContent}
      dayCellContent={dayCellContent}/>
    </div>
  )
}

export default Calendar;
