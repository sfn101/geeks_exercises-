const minutesLived = (birthdate) => {
  const now = new Date();
  const birth = new Date(birthdate);
  if (isNaN(birth.getTime())) {
    return 'Invalid birthdate format. Please use YYYY-MM-DD.';
  }
  const diff = now - birth;
  if (diff < 0) {
    return 'Birthdate cannot be in the future.';
  }
  const minutes = Math.floor(diff / (1000 * 60));
  return `You have lived for ${minutes.toLocaleString()} minutes.`;
};

module.exports = { minutesLived };