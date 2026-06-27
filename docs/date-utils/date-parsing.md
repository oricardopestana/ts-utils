---
outline: deep
---

# Date parsing

Functions for formatting dates to strings and parsing strings into `Date` objects.

## getDateAsString

```ts
import { getDateAsString } from "@oricardopestana/ts-utils/date-utils";
```

Formats a date into a string using a token-based format pattern.

```ts
const date = new Date(2026, 5, 27, 3, 5, 9);

getDateAsString(date, { format: "YYYY-MM-DD" });
// "2026-06-27"

getDateAsString(date, { format: "YYYY-MM-DD HH:mm:ss" });
// "2026-06-27 03:05:09"

getDateAsString(date, { format: "M/D/YY" });
// "6/27/26"

getDateAsString(date, { format: "h:m:s" });
// "3:5:9"
```

The token reference:

| Token   | Output                 |
|---------|------------------------|
| `YYYY` / `yyyy` | 4-digit year (e.g. `2026`) |
| `YY` / `yy`     | 2-digit year (e.g. `26`)   |
| `MM`   | 2-digit month (`01`–`12`) |
| `M`    | 1- or 2-digit month (`1`–`12`) |
| `DD` / `dd` | 2-digit day (`01`–`31`) |
| `D` / `d`  | 1- or 2-digit day (`1`–`31`) |
| `HH` / `hh` | 2-digit hours (`00`–`23`) |
| `H` / `h`  | 1- or 2-digit hours (`0`–`23`) |
| `mm`  | 2-digit minutes (`00`–`59`) |
| `m`   | 1- or 2-digit minutes (`0`–`59`) |
| `SS` / `ss` | 2-digit seconds (`00`–`59`) |
| `S` / `s`  | 1- or 2-digit seconds (`0`–`59`) |

Throws if the input cannot be parsed into a valid date:

```ts
getDateAsString("not-a-date", { format: "YYYY-MM-DD" });
// throws Error("Invalid date")
```

## getDateFromString

```ts
import { getDateFromString } from "@oricardopestana/ts-utils/date-utils";
```

Parses a date string into a `Date` object, using either a format pattern or the native `Date` constructor.

```ts
getDateFromString("2026-06-27", { format: "YYYY-MM-DD" });
// Date(2026, 5, 27)

getDateFromString("27/06/2026 03:05:09", { format: "DD/MM/YYYY HH:mm:ss" });
// Date(2026, 5, 27, 3, 5, 9)

getDateFromString("1/5/26", { format: "M/D/YY" });
// Date(2026, 0, 5)
```

When called without options, it delegates to `new Date(string)`:

```ts
getDateFromString("2026-06-27T03:05:09.000Z");
// Date(2026, 5, 27)
```

Throws if the string doesn't match the format or represents an invalid date:

```ts
getDateFromString("2026/06/27", { format: "YYYY-MM-DD" });
// throws Error("Invalid date")

getDateFromString("not-a-date");
// throws Error("Invalid date")
```
