# CIT 384 – Date Exercise (Week 9)

Turns the raw JavaScript `Date` output from slide 16 into a human-readable line:

```
Before: Today is Thu Oct 29 2026 18:05:12 GMT-0700 (Pacific Daylight Time)
After:  Today is 10/29/2026.
```

## 🚀 Live Demo

You can view the published website here:
[Live Website on GitHub Pages](https://jonathanmacmillan446-web.github.io/comp484-date-exercise/)

Open `index.html` to see the before/after on the page. The console shows both lines too.

## How it works

1. `var date = new Date();` creates the current date, the same as on slides 15–16.
2. `getMonth() + 1` gives the month. Months are 0-indexed (January = 0), so it needs the +1.
3. `getDate()` gives the day of the month. (`getDay()` is a different method: it gives the weekday, 0–6.)
4. `getFullYear()` gives the 4-digit year.
5. The ternary operator (slide 54) adds a leading zero to single digits: `month < 10 ? "0" + month : month`. Because `"0"` is a string, `+` joins it to the number instead of adding (slide 45), so 3 becomes `"03"`.
6. `+` joins the pieces into `Today is MM/DD/YYYY.`
7. `document.body.innerHTML` writes the result into the page (slide 18).
8. The script is linked in the `<head>` with `defer` (slide 28), and the CSS is in an external `styles.css` (Week 4).

Reference: [MDN – Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
