
const originalJson = [
    { weekday: 'Tuesday', date: '27-February-2024', details: '' },
    { weekday: 'Wednesday', date: '28-February-2024', details: '' },
    { weekday: 'Thursday', date: '29-February-2024', details: '' }
];

const getLastDaysOfPreviousMonth = (dateStr, numberOfDays) => {
    // Parse the input date
    const date = new Date(dateStr);
    
    // Get the first day of the current month
    const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    
    // Get the last day of previous month
    const lastDayOfPreviousMonth = new Date(firstDayOfCurrentMonth - 1);
    
    // Array to store the dates
    const resultDates = [];
    
    // Get the last N days
    for (let i = 0; i < numberOfDays; i++) {
        // Create new date for each day
        const currentDate = new Date(
            lastDayOfPreviousMonth.getFullYear(),
            lastDayOfPreviousMonth.getMonth(),
            lastDayOfPreviousMonth.getDate() - i
        );
        
        // Format the date components
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = currentDate.toLocaleString('en-US', { month: 'long' });
        const year = currentDate.getFullYear();
        const weekday = currentDate.toLocaleString('en-US', { weekday: 'long' });
        
        const formattedDate = `${day}-${month}-${year}`;
        
        // Create the date object with additional details
        const dateObject = {
            weekday: weekday,
            date: formattedDate,
            details: ''
        };
        
        // Add to the beginning of array to maintain chronological order
        resultDates.unshift(dateObject);
    }
    
    return resultDates;
}

// Example usage:
console.log(getLastDaysOfPreviousMonth('1-November-2024', 4));
/* Output:
[
    { weekday: 'Monday', date: '28-October-2024', details: '' },
    { weekday: 'Tuesday', date: '29-October-2024', details: '' },
    { weekday: 'Wednesday', date: '30-October-2024', details: '' },
    { weekday: 'Thursday', date: '31-October-2024', details: '' }
]
*/

console.log([...getLastDaysOfPreviousMonth('1-November-2024', 4), ...originalJson]);