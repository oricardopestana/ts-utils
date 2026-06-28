---
outline: deep
---

# useAsync

Gracefully handles a callback that returns a promise, wrapping the result in a discriminated tuple so you never need a `try/catch`.

```ts
import { useAsync } from "@oricardopestana/ts-utils";
```

## AsyncResult

The return type is `AsyncResult<ResolveData, RejectionReason>` — a discriminated tuple:

```ts
type AsyncResult<ResolveData, RejectionReason> =
  | [data: ResolveData, reason: null]
  | [data: null, reason: RejectionReason];
```

When the promise resolves, the first element holds the data and the second is `null`.  
When the promise rejects, the first element is `null` and the second holds the rejection reason.

## Usage

```ts
const [data, error] = await useAsync(() => Promise.resolve(42));
// data  -> 42
// error -> null
```

```ts
const [data, error] = await useAsync(() => Promise.reject(new Error("Oops!")));
// data  -> null
// error -> Error("Oops!")
```

The callback can throw synchronously — errors are caught the same way:

```ts
const [data, error] = await useAsync(() => {
  throw new Error("Sync throw");
});
// data  -> null
// error -> Error("Sync throw")
```

The rejection reason type parameter defaults to `Error`, but non-Error values are also supported:

```ts
const [data, error] = await useAsync(() => Promise.reject("Oops!"));
// data  -> null
// error -> "Oops!"
```
