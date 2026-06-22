# ts-utils

Latest release ![GitHub Tag](https://img.shields.io/github/v/tag/oricardopestana/ts-utils)

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/oricardopestana/ts-utils/publish.yml)

## Installation

```bash
npm install @oricardopestana/ts-utils
```

## Usage

### `useAsync`

Wraps a promise-returning callback and returns a `[data, error]` tuple — no more try/catch.

```ts
import { useAsync } from "@oricardopestana/ts-utils";

const [data, error] = await useAsync(() => fetch("/api/data").then(r => r.json()));
if (error) {
  console.error("Failed to fetch:", error);
  return;
}
console.log(data);
```

### `Prettify<T>`

Expands intersection/utility types into a flat object for readable IDE previews.

```ts
import type { Prettify } from "@oricardopestana/ts-utils/types";

type Complex = { a: string } & Omit<{ b: number } & Record<"c", boolean>, "b">;
type Readable = Prettify<Complex>;
// Hovering shows: { a: string; c: boolean }
```

### `LooseAutocomplete<T>`

Preserves IDE autocomplete for union members while still allowing arbitrary values.

```ts
import type { LooseAutocomplete } from "@oricardopestana/ts-utils/types";

type Language = LooseAutocomplete<"en" | "fr" | "es">;
const a: Language = "en";       // autocompletes
const b: Language = "pt";       // also valid
```

## Documentation

Full documentation at [ts-utils-theta.vercel.app](https://ts-utils-theta.vercel.app/)

## License

MIT
