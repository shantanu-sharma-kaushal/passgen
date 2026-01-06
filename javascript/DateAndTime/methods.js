let d1=new Date(); // current date and time
console.log(d1);    
let d2=new Date(2023,5,15,10,30,0); // June(06) 15, 2023 10:30:00 (months are 0-indexed)
//(year, monthIndex, day, hours, minutes, seconds, milliseconds)
console.log(d2); 
let d3=new Date("2023-06-15T10:30:00"); // ISO 8601 format, June 15, 2023 10:30:00
console.log(d3);

// Get components of the date   
console.log("Year:", d1.getFullYear());
console.log("Month:", d1.getMonth() + 1); // Months are 0-indexed
console.log("Date:", d1.getDate());
console.log("Hours:", d1.getHours());
console.log("Minutes:", d1.getMinutes());
console.log("Seconds:", d1.getSeconds());
console.log("Milliseconds:", d1.getMilliseconds());
console.log("Day of Week:", d1.getDay()); // 0 (Sunday) to 6 (Saturday)
// Get time in milliseconds since January 1, 1970
console.log("Time in ms since Jan 1, 1970:", d1.getTime());
// Set components of the date
d1.setFullYear(2024);
d1.setMonth(11); // December (11)
d1.setDate(25);
d1.setHours(15);    
d1.setMinutes(45);
d1.setSeconds(30);
console.log("Updated Date:", d1);
// Date to String
console.log("Date to String:", d1.toString());// Human-readable format,(depends on system settings)
console.log("Date to ISO String:", d1.toISOString());// ISO 8601 format,(YYYY-MM-DDTHH:mm:ss.sssZ)
console.log("Date to Locale String:", d1.toLocaleString());// Locale specific format,(depends on system settings)
console.log("Date to Date String:", d1.toDateString());// Date portion only
console.log("Date to Time String:", d1.toTimeString());// Time portion only
// Date Arithmetic
let d4=new Date("2023-01-01");
console.log("Original Date:", d4);
d4.setDate(d4.getDate() + 10); // Add 10 days
console.log("After adding 10 days:", d4);
d4.setMonth(d4.getMonth() + 2); // Add 2 months
console.log("After adding 2 months:", d4);
d4.setFullYear(d4.getFullYear() + 1); // Add 1 year
console.log("After adding 1 year:", d4);
// Difference between two dates
let d5=new Date("2024-01-01");
let diffInMs=d5 - d4; // Difference in milliseconds
let diffInDays=diffInMs / (1000 * 60 * 60 * 24); // Convert to days
console.log("Difference between d5 and d4 in days:", diffInDays);
