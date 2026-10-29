# CIT 384 – Date Exercise (Week 9)

Turns the raw JavaScript `Date` output from slide 16 into a human-readable line:

```
Before: Today is Thu Oct 29 2026 18:05:12 GMT-0700 (Pacific Daylight Time)
After:  Today is 10/29/2026.
```

Open `index.html` to see the before/after on the page. The console shows both lines too.

## How it works

1. `new Date()` creates the current date, the same as on slide 16.
2. `getMonth() + 1` gives the month. `getMonth()` starts at 0 for January, so it needs the +1.
3. `getDate()` gives the day of the month. (`getDay()` is a different method: it gives the weekday, 0–6.)
4. `getFullYear()` gives the 4-digit year.
5. `String(...).padStart(2, "0")` adds a leading zero so March 5 shows as `03/05`, which matches the MM/DD format.
6. The pieces are joined into `Today is MM/DD/YYYY.`

Reference: [MDN – Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
