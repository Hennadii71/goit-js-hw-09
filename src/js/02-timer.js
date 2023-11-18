import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const refs = {
  buttonStart: document.querySelector('[data-start]'),
  counterDays: document.querySelector('[data-days'),
  counterHours: document.querySelector('[data-hours]'),
  counterMinutes: document.querySelector('[data-minutes]'),
  counterSeconds: document.querySelector('[data-seconds]'),
};
