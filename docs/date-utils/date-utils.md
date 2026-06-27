---
outline: deep
---

# Date utilities

A collection of utility functions for parsing, formatting, and validating
dates.

## Usage

```ts
import { dateUtils } from "@oricardopestana/ts-utils/date-utils";
// or import individual functions:
import {
  getDateAsString,
  getDateFromString,
  isValidDate,
  isDateBefore,
  isDateAfter,
} from "@oricardopestana/ts-utils/date-utils";
```

The `dateUtils` object exposes all available functions:

```ts
dateUtils.getDateAsString(new Date(), { format: "YYYY-MM-DD" });
dateUtils.isValidDate("2026-06-27");
dateUtils.isDateBefore("2026-06-26", "2026-06-27");
```

## Functions

- [Date parsing](/date-utils/date-parsing) — `getDateAsString`, `getDateFromString`
- [Date validation](/date-utils/date-validation) — `isValidDate`, `isDateBefore`, `isDateAfter`
