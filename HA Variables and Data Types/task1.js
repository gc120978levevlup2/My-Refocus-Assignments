let person_name = 'Sam';
let cal_per_min_burned = 225.0 / 30.0;
let min_per_hour = 60;
let days_per_cycling_session = 15;
let per_day_mins_cycling = 30;
let total_mins_cycling = days_per_cycling_session * per_day_mins_cycling;
let cal_burned = total_mins_cycling * cal_per_min_burned;
console.log(`Great work, ${person_name}! After ${per_day_mins_cycling / min_per_hour} hours of running every day for a week, you may lose a total of ${cal_burned} calories.`);
