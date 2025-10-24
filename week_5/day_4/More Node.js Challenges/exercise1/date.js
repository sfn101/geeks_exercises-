const timeUntilNewYear = () => {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(nextYear, 0, 1);
  const diff = newYear - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return `The next New Year is in ${days} days and ${formattedTime} hours.`;
};

module.exports = { timeUntilNewYear };