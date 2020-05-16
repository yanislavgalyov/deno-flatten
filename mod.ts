function flattenInternal(arr: any[], result: any[]) {
  for (let current of arr) {
    Array.isArray(current)
      ? flattenInternal(current, result)
      : result.push(current);
  }

  return result;
}

export function flatten(arr: any[]) {
  return flattenInternal(arr, []);
}
