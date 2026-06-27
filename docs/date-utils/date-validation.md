---
outline: deep
---

# Date validation

Functions for checking whether a date is valid and comparing two dates.

## isValidDate

```ts
import { isValidDate } from "@oricardopestana/ts-utils/date-utils";
```

Returns `true` if the input can be parsed into a valid `Date`, `false` otherwise.

```ts
isValidDate("2026-06-27");
// true

isValidDate(new Date(2026, 5, 27));
// true

isValidDate("not-a-date");
// false

isValidDate(new Date("invalid"));
// false
```

## isDateBefore

```ts
import { isDateBefore } from "@oricardopestana/ts-utils/date-utils";
```

Returns `true` if `date1` is strictly before `date2`.

```ts
isDateBefore("2026-06-26", "2026-06-27");
// true

isDateBefore("2026-06-28", "2026-06-27");
// false

isDateBefore("2026-06-27", "2026-06-27");
// false
```

## isDateAfter

```ts
import { isDateAfter } from "@oricardopestana/ts-utils/date-utils";
```

Returns `true` if `date1` is strictly after `date2`.

```ts
isDateAfter("2026-06-28", "2026-06-27");
// true

isDateAfter("2026-06-26", "2026-06-27");
// false

isDateAfter("2026-06-27", "2026-06-27");
// false
```
