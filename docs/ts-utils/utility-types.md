---
outline: deep
---

# Utility types

Types that may come in handy when trying to take the most out of TypeScript types.

## Prettify

Prettify is for (who could've guessed...) "prettifying" the inline type introspection.
```ts
import type { Prettify } from "@oricardopestana/ts-utils/types";
```

If you have the following code

```ts
type ComplexType = {
  a: string;
  b: number;
} & Omit<
  {
    c: boolean;
  } & Record<"d", string[]>,
  "c"
>;
```

In your IDE, hovering over something that is typed like this would give you this definition:

```ts
type ComplexType = {
    a: string;
    b: number;
} & Omit<{
    c: boolean;
} & Record<"d", string[]>, "c">
```

By wrapping your type with `Prettify` 

```ts
type AnotherType = Prettify<ComplexType>
```

your IDE will be able to parse this type intersection better and give you the following information:

```ts
type AnotherType = {
    a: string;
    b: number;
    d: string[];
}
```

## LooseAutocomplete

```ts
import type { LooseAutocomplete } from "@oricardopestana/ts-utils/types"
```

This is for when you have an `Enum`-like type that could also be another unspecified string.

Example: the `Other` option inside a select on a form. Sometimes we need to select `Other` and specify what that option means:

```ts
type Languages = "English" | "French" | "Spanish" | string
```

The issue is that if we want to use this type in our code (e.g. `const mostUsedLanguage: Languages = ""`), we will not have autocomplete for the values that we already specified.

The workaround is to wrap the type in a `LooseAutocomplete`. This will make it so that if you want to specify another value you can, while still being able to use the autocomplete feature.

```ts
const mostUsedLanguage: LooseAutocomplete<Languages> = "English";

const mostUsedLanguageInPortugal: LooseAutocomplete<Languages> = "Portuguese";
```

