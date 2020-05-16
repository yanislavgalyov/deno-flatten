# 🦕 flatten

[![Open Issues](https://img.shields.io/github/issues/yanislavgalyov/deno-flatten)](https://github.com/yanislavgalyov/deno-flatten/issues)
[![GitHub license](https://img.shields.io/github/license/yanislavgalyov/deno-flatten)](https://github.com/yanislavgalyov/deno-flatten/blob/master/LICENSE)
[![Deno Version](https://img.shields.io/badge/deno-1.0.0-informational)](https://deno.land)

[Deno](https://deno.land) module for flattening array function.

## Usage

```typescript
import { flatten } from "https://raw.githubusercontent.com/yanislavgalyov/deno-flatten/master/mod.ts";

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
