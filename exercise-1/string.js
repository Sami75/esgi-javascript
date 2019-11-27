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
  if (typeof string !== "string" || string.length === 0) return "";

  return string
    .split("")
    .map(str => {
      switch (str) {
        case "a":
          return str.replace("a", "4");
          break;
        case "e":
          return str.replace("e", "3");
          break;
        case "i":
          return str.replace("i", "1");
          break;
        case "o":
          return str.replace("o", "0");
          break;
        case "u":
          return str.replace("u", "(_)");
          break;
        case "y":
          return str.replace("y", "7");
          break;
        default:
          return str;
      }
    })
    .join("");
}

function prop_access(object, value) {
  let objTemp = object;
  for (var i = 0; i < value.split(".").length; i++) {
    let s = value.split(".").map(val => {
      if (objTemp[val]) {
        return val;
      } else {
        return null;
      }
    });
    objTemp = objTemp[s[i]];
  }
  return objTemp;
}

function verlan(string) {
  return string
    .split(" ")
    .map((str, i) => {
      return str
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
}

function yoda(string) {
  return string
    .split(" ")
    .reverse()
    .join(" ");
}

function vig(str, code) {
  while (code.length < str.length) {
    code += code;
  }

  return str
    .split("")
    .map(function(car, index) {
      car = car.toLowerCase();
      const carCode = car.charCodeAt(0) - "a".charCodeAt(0);

      if (carCode < 0 || carCode > 25) return car;
      const codeCode = code[index].charCodeAt(0) - "a".charCodeAt(0);

      const encodedCode = (carCode + codeCode) % 26;

      return String.fromCharCode(encodedCode + "a".charCodeAt(0));
    })
    .join("");
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

console.log(leet("anaconda World!"));
console.log(leet("mais ou est donc ornicar"));
console.log(leet("3est"));
console.log(leet("rest"));
console.log(leet("rest, aaa, zzz"));
console.log(leet({}));
console.log(leet(null));
console.log(leet(""));
console.log(leet([]));

console.log(
  prop_access(
    { animal: { type: { name: { race: "chien" } } } },
    "animal.type.name.race"
  )
);

console.log(verlan("hello world"));
console.log(yoda("hello world"));
console.log(vig("wikipedia", "crypto"));
