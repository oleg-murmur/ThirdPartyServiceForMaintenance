export class TimeInterval{
    startHours!: number | 0;
    startMinutes!: number | 0;
    endHours!: number | 0;
    endMinutes!: number | 0;

    constructor(startHours: number, startMinutes: number, endHours: number, endMinutes: number) {
        this.setStartTime(startHours, startMinutes);
        this.setEndTime(endHours, endMinutes);
    }

    setStartTime(hours: number, minutes: number): void {
        if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
            this.startHours = hours;
            this.startMinutes = minutes;
        } else {
            console.error("Invalid start time provided");
        }
    }
    setEndTime(hours: number, minutes: number): void {
        if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
            this.endHours = hours;
            this.endMinutes = minutes;
        } else {
            console.error("Invalid end time provided");
        }
    }
}
