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
  buttonStart: document.querySelector('button[data-start]'),
  counterDays: document.querySelector('[data-days'),
  counterHours: document.querySelector('[data-hours]'),
  counterMinutes: document.querySelector('[data-minutes]'),
  counterSeconds: document.querySelector('[data-seconds]'),
};

refs.buttonStart.disabled = true;
refs.buttonStart.addEventListener('click', timerStart);

function timerStart() {}

Report.success(
  'OK',
  'Everything is fine',
  'click to continue',
  {
  width: '200px',
  svgSize: '24px',
  messageMaxLength: 1923,
  plainText: false,
});





