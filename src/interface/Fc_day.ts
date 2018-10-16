export interface Fcst_day {
    date: string;
    day_short: string;
    day_long: string;
    tmin: number;
    tmax: number;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
    hourly_data: Hourly_data;
}