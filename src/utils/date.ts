export const getDayOfWeek = (day: number): string => {
    if(day === 0) {
        return 'Monday'
    }
    if(day === 1) {
        return 'Tuesday'
    }
    if(day === 2) {
        return 'Wednesday'
    }
    if(day === 3) {
        return 'Thursday'
    }
    if(day === 4) {
        return 'Friday'
    }
    if(day === 5) {
        return 'Saturday'
    }
    if(day === 6) {
        return 'Sunday'
    }
    return 'N/A';
}

export const getFormattedHour = (militaryHour: number): string => {
    let hour = militaryHour;
    let unit = 'AM';
    if(hour === 0) {
        hour = 12;
    }
    if(hour > 12) {
        // For hours above 12, we can calculate the standard hour by subtracting 12. For example, 13 - 12 would be 1, which is 1 PM.
        hour = militaryHour - 12;
        unit = 'PM';
    } else if (hour === 12) {
        // Need to add an exception for if the hour is 12. We can't subtract 12 from 12 since that would be 0.
        unit = 'PM'
    }
    return `${hour} ${unit}`;
}