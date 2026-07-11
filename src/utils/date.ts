export const getDayOfWeek = (day: number) => {
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