const { addDays, format } = require('date-fns');

function performDateOperations() {
    const currentDate = new Date();
    const dateIn5Days = addDays(currentDate, 5);
    const formattedDate = format(dateIn5Days, 'yyyy-MM-dd');
    console.log(formattedDate);
}

module.exports = { performDateOperations };