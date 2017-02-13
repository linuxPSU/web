/*console.log(56556);
console.log(parseInt("459 dsa"));
var stringTest = new String();
console.log(parseInt(stringTest));
console.log(47 * 58);
console.log("DSa");
var number = new Number();
number = 145;
console.log(new String(number));
number > 146 ? "true. " + number + " > 146" : number + " false, < 146";
var number = 145;
fun = function (number){
    console.log(arguments[0]);
    return number;
};
newNumber = fun(number);
console.log(newNumber);

fun = function (callback){
    var name = "pasha";
    return callback(name);
};

fun(function(name){
    console.log ("Hello " + name);
    }
);
;anonym = function(){
    return function(){
        console.log("anonym function");
    }
}

anonym()();*/
/*var fun = function(num){
    fun.number = 0;
    fun.number = num !== undefined ? num : fun.number;
    return ++fun.number;
};

console.log(fun() + " - результат");
console.log(fun(55) + " - результат");
console.log("-----------------------");

var fun = (function(){
    var number = 0;
    return function(num){
        number = num !== undefined ? num : number;
        return ++number;
    }
}());

console.log(fun() + " - результат");
console.log(fun(55) + " - результат");
console.log(fun(0) + " - результат");*/

var testTrow = function(surname){
    if(surname.length > 7) throw Error("Error");
    return surname + ", hello.";
}

try{
    console.log(testTrow("Талайко"));
    console.log(testTrow("Сущевск"));
} catch (e) {
    console.log(e.message);
}