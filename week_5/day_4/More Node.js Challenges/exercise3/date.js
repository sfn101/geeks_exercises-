const Holidays = require('date-holidays');

const hd = new Holidays('US');

const nextHoliday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const holidays = hd.getHolidays(year);
  let nextHol = null;
  for (let h of holidays) {
    if (new Date(h.date) > now) {
      nextHol = h;
      break;
    }
  }
  if (!nextHol) {
    const nextYear = year + 1;
    const holidaysNext = hd.getHolidays(nextYear);
    nextHol = holidaysNext[0];
  }
  const holidayDate = new Date(nextHol.date);
  const diff = holidayDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const todayFormatted = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return `Today is ${todayFormatted}. The next holiday is ${nextHol.name} in ${days} days and ${formattedTime} hours.`;
};

module.exports = { nextHoliday };