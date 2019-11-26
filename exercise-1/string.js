function ucfirst(string) {
  if (typeof string !== "string" || string.length === 0) return "";
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function capitalize(string) {
  if (typeof string !== "string" || string.length === 0) return "";

  return string
    .toLowerCase()
    .split(" ")
    .map(str => {
      return ucfirst(str);
    })
    .join(" ");
}

function camelCase(string) {
  if (typeof string !== "string" || string.length === 0) return "";

  return capitalize(string)
    .split(" ")
    .join("");
}

function snakeCase(string) {
  if (typeof string !== "string" || string.length === 0) return "";

  return string
    .split(" ")
    .map(str => {
      return str.replace(",", "");
    })
    .join("-")
    .toLowerCase();
}

function leet(string) {
  // switch (string.chatAt(0).toLowerCase()) {
  //   case "a":
  // }
}

console.log(ucfirst("hello World!"));
console.log(ucfirst("Test"));
console.log(ucfirst("3est"));
console.log(ucfirst("rest"));
console.log(ucfirst({}));
console.log(ucfirst(null));
console.log(ucfirst(""));
console.log(ucfirst([]));

console.log(capitalize("hello World!"));
console.log(capitalize("Test"));
console.log(capitalize("3est"));
console.log(capitalize("rest"));
console.log(capitalize({}));
console.log(capitalize(null));
console.log(capitalize(""));
console.log(capitalize([]));

console.log(camelCase("hello World!"));
console.log(camelCase("Test"));
console.log(camelCase("3est"));
console.log(camelCase("rest"));
console.log(camelCase({}));
console.log(camelCase(null));
console.log(camelCase(""));
console.log(camelCase([]));

console.log(snakeCase("hello World!"));
console.log(snakeCase("Test"));
console.log(snakeCase("3est"));
console.log(snakeCase("rest"));
console.log(snakeCase("rest, aaa, zzz"));
console.log(snakeCase({}));
console.log(snakeCase(null));
console.log(snakeCase(""));
console.log(snakeCase([]));

leet("test");
