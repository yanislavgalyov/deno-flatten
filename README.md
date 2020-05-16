# 🦕 flatten

[Deno](https://deno.land) module for flattening arrays.

## Usage

```typescript
import { flatten } from "https://raw.githubusercontent.com/yanislavgalyov/deno-faltten/master/mod.ts";

const flatArr = flatten([1, [2, 3], 4]);
console.log(flatArr); // Prints [1, 2, 3, 4]
```

## Test

```bash
# unit tests
deno test ./test.ts
```

## Format code

```bash
deno fmt
```

## Resources

- [Deno Website](https://deno.land)
