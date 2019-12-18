String.prototype.ucfirst = function () {
    if (this.length === 0) return "";
    return this.charAt(0).toUpperCase() + this.substring(1);
};

console.log("sami".ucfirst());

String.prototype.capitalize = function () {
    if (this.length === 0) return "";

    return this
        .toLowerCase()
        .split(" ")
        .map(str => {
            return str.ucfirst();
        })
        .join(" ");
}

console.log("sami".capitalize());

String.prototype.camelCase = function () {
    if (this.length === 0) return "";

    return this.capitalize()
        .split(" ")
        .join("");
}

console.log("sami thairi".camelCase());

String.prototype.snakeCase = function () {
    if (this.length === 0) return "";

    return this
        .split(" ")
        .map(str => {
            return str.replace(",", "");
        })
        .join("-")
        .toLowerCase();
}

console.log("sami thairi".snakeCase());


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
        .map(function (car, index) {
            car = car.toLowerCase();
            const carCode = car.charCodeAt(0) - "a".charCodeAt(0);

            if (carCode < 0 || carCode > 25) return car;
            const codeCode = code[index].charCodeAt(0) - "a".charCodeAt(0);

            const encodedCode = (carCode + codeCode) % 26;

            return String.fromCharCode(encodedCode + "a".charCodeAt(0));
        })
        .join("");
}

