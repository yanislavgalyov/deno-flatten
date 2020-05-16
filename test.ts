import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { flatten } from "./mod.ts";

Deno.test("isFlatteningNestedArrays", function (): void {
  assertEquals("world", "world");
  assertEquals(flatten(["a", "b", ["c"], "d", ["e"]]), [
    "a",
    "b",
    "c",
    "d",
    "e",
  ]);
});

Deno.test("isFlatteningDeeplyNestedArrays", function (): void {
  assertEquals("world", "world");
  assertEquals(flatten(["a", [[[[[[[["b", [["c"]]]]]], "d", ["e"]]]]]]), [
    "a",
    "b",
    "c",
    "d",
    "e",
  ]);
});
