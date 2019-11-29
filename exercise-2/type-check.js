function type_check_v1(arg1, arg2) {
  let arg2LC = arg2.toLowerCase();
  return typeof arg1 === arg2LC
    ? true
    : arg2LC === "array" && arg1.length > 0
    ? true
    : arg2LC === "null" && arg1 === null
    ? true
    : arg2LC;
}

console.log(type_check_v1(1, "Number"));
