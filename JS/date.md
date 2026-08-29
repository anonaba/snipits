To convert the Unix timestamp 1661834187 into a human-readable date and time in JavaScript, you need to multiply it by 1000. JavaScript's Date object requires milliseconds, while your timestamp is in seconds.
Here is the quickest way to do it:
```js
const timestamp = 1661834187;const date = new Date(timestamp * 1000);

console.log(date.toString()); // Output: Tue Aug 30 2022 12:36:27 GMT... (displays in your local time zone)
```
### Common Formatting Options
Depending on how you want the final text to look, you can use these built-in methods:

* Local string (Easiest): `date.toLocaleString()`
   - *Result*: `8/30/2022, 12:36:27 PM`
* Date only: `date.toLocaleDateString()`
    - *Result*: `8/30/2022`
* Time only: `date.toLocaleTimeString()`
  - *Result*: `12:36:27 PM`
* UTC/GMT time: `date.toUTCString()`
  - *Result*: `Tue, 30 Aug 2022 04:36:27 GMT`

```js
const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
console.log(dayName) // 'Tuesday'
```
or
```js
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days[date.getDay()]) //tuesday
```

Here are the solutions for formatting your date, using advanced styles, and handling time zones in JavaScript.
## :date: 1. Custom Layouts (e.g., YYYY-MM-DD)
If you need a specific structure without using external libraries, you can extract the individual date components manually.
Note: getMonth() is 0-indexed (January is 0), so you must add 1. padStart(2, '0') ensures single digits get a leading zero.

```js
const date = new Date(1661834187 * 1000);
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
// YYYY-MM-DD formatconst formattedDate = `${year}-${month}-${day}`; 
console.log(formattedDate); // "2022-08-30"
```
## :art: 2. Advanced Styling with Intl.DateTimeFormat
The native Intl object lets you format dates into clean, human-friendly sentences based on specific languages or custom configurations.
```js
const date = new Date(1661834187 * 1000); // Example: "Tuesday, August 30, 2022"
const longFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
console.log(longFormatter.format(date)); // Example: "Aug 30, 22, 12:36 PM"
const shortFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: '2-digit',
  hour: 'numeric',
  minute: '2-digit'
});
console.log(shortFormatter.format(date));
```
## :earth_africa: 3. Handling Specific Time Zones
By default, JavaScript converts the timestamp into the user's local browser time zone. You can force it to display a specific time zone using the timeZone property inside Intl.DateTimeFormat.
```js
const date = new Date(1661834187 * 1000); // Force Tokyo Time (JST)
const tokyoTime = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Tokyo',
  dateStyle: 'full',
  timeStyle: 'long'
}).format(date);
console.log(tokyoTime); // "Tuesday, August 30, 2022 at 1:36:27 PM GMT+9"
// Force New York Time (EDT)
const nyTime = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  dateStyle: 'full',
  timeStyle: 'long'
}).format(date);
console.log(nyTime); // "Tuesday, August 30, 2022 at 12:36:27 AM GMT-4"
```
