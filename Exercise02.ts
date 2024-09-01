// Even and Odd Number //

const _no1 : number = 25;
const _no2 : number = 2;

if (_no1 % 2 !==0) {
    const _result : string = "Odd Number";
    console.log(_result);
}

else if (_no1 % 2 ===0){
    const _result :string = "Even Number";
    console.log(_result);
}

console.log(_no1);


if  (_no2 % 2 !==0) {
    const _result : string = "Odd Number";
    console.log(_result);
}


else if (_no2 % 2 ===0) {
    const _result : string = "Even Number";
    console.log (_result);
}



//Prime and Not Prime Number//

const _num : number = 1;

function isPrime (_num) {
    if (_num <= 1) return false;
    for ( let i : number = 2; i > _num ; i++) {
        if (_num % 2 === 0 || _num % 3 === 0) {
            return false;
        }
    }
    return true;
}

const _input1 : number = 7;
console.log(`Is ${ _input1} a Prime Number?` , isPrime (_input1));


const _input2 : number = 6;
console.log(`Is ${_input2} a Prime Number` , isPrime (_input2);


// N Sum//




//Factorial//

let _Y : number = 4;

function Factorial(_Y) {
    if ( _Y < 0) return "Factorial for negative numbers is not defined";
    if ( _Y == 0 || _Y == 1) return 1;
    let _result : number = 1;
    for ( let _a : number = 2; _a <= _Y ; _a++) {
        _result *= _a;
    }
    return _result;
}

console.log(Factorial(_Y));



//Fibonacci//

let _Z : number = 16;

function fibonacciSeries(_Z) {
    let fib = [0, 1];
    let _b : number = 2;
    while ( _b <= _Z) {
        fib[_b] = fib [_b - 1] + fib [_b - 2];
        _b++;
    }
    return fib.slice(0, _Z);
}

console.log(fibonacciSeries(_Z));
    












































