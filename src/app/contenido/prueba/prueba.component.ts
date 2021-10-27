import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  fecha = '2021-05-15';
  horainicio = '08:30:00';
  horafin = '09:30:00';
  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    locale: 'es',
    events: [
      { title: 'event 1', date: this.fecha, start: this.fecha + 'T' + this.horainicio, end: this.fecha + 'T' + this.horafin,  color: 'green', backgroundColor: 'green', },
      { title: 'event 2', date: '2021-05-30' }
    ],
  };

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
