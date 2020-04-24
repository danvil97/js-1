//! Task 1 Fixed
function splitAndMerge(str, sp) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').join(sp);
    }
    return arr.join(' ');
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

//! Task 2
function convert(hash) {
    var arr = [];
    for (var key in hash)
        arr.push([key, hash[key]]);
    return arr;
}

console.log(convert({
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
}));

//! Task 3
function toCamelCase(str) {
    var words = str.split(/[-_]/);
    for (var i = 1; i < words.length; i++)
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    return words.join('');
}

console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"
console.log(toCamelCase("The-Stealth_Warrior")); // returns "TheStealthWarrior"

//! Task 4
function reverseWords(str) {
    str = str.split('').reverse().join('').split(' ').reverse().join(' ')
    return str;
}

console.log(reverseWords(" A fun little challenge! "));

//! Task 5
function stringExpansion(str) {
    if (!str.match(/\d/))
        return str;
    expandedStr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/\d/) && str[i + 1].match(/\D/)) {
            expandedStr.push(str[i + 1].repeat(str[i]));
        }
    }
    return expandedStr.join('');
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));

//! Task 6
function largest() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max)
            max = arguments[i];
    }
    return max;
}

function smallest() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] < min)
            min = arguments[i];
    }
    return min;
}

console.log(largest(2, 0.1, -5, 100, 3)) // 100
console.log(smallest(2, 0.1, -5, 100, 3)) // -5)

//! Task 7
function transform(arr) {
    var newArr = arr.map(function (el) {
        return function () {
            return console.log(el);
        };
    });
    return newArr;
}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);

newArray[3](); // should return 40
newArray[4](); // should return 50

//! Task 8
function sum() {
    var args = [].slice.call(arguments)
    if (args.length == 1) {
        return args[0];
    }
    return args[0] + sum.apply('', args.slice(1));
}
console.log(sum(1, 3, 5, 7)); //should return 16

//! Task 9
function countDown(num) {
    var timerInt = setInterval(function () {
        (num < 0) ? clearInterval(timerInt): console.log(num--);
    }, 1000);

}

countDown(3);

//! Task 10
Function.prototype.myBind = function (cont) {
    var funct = this;
    return function () {
        return funct.apply(cont, arguments);
    };
}

function addPropToNumber(number) {
    return this.prop + number;
}
var bound = addPropToNumber.myBind({
    prop: 9
});
bound(1) // 10















/*
var words = str.split(' ');
for (var i = 1; i < words.length; i++)
        console.log(words[i] = words[i].split('').reverse().join(''));
    return words.join(" ");
    */