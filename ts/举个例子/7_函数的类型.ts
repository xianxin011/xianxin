/* 在JavaScript中， 有两种常见的定义
1 函数定义 
函数声明
函数表达式
*/

// 函数表达式

let mySum = function (x: number, y: number):number{
    return x + y;
}

// 实际上可以等于

let mySum1:(x: number, y: number) => number = function(x:number, y:number):number{
    return x + y;
}

// 用接口定义函数的形状

interface searchFun{
    (source:string, subString: string):boolean
}

let mySearch: searchFun;

mySearch = (source:string, subString: string):boolean=>{
    return source.indexOf(subString) !== -1;
}

// 2 可选参数
/// 可选参数后面不允许再出现必须参数了
function buildName(firstName: string, lastName?:string){
    if(lastName){
        return firstName + ' ' + lastName;
    }else{
        return firstName;
    }
}

// 3 参数默认值

function getName(firstName: string, lastName: string = 'xiaoming'){
    return firstName + ' ' + lastName;
}

// 4 剩余参数

function push(array:any[],...items:any[]){
    items.forEach(element => {
        array.push(element);
        
    });
}

// 5 重载

/**
 * 重载允许一个函数接受不同或类型的参数时，做出不同的处理
 * 
 */
function reverse(x:number):number
function reverse(x:string):string
function reverse(x:number|string):number|string{
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''));
    }else if (typeof x === 'string'){
        return x.split('').reverse().join('');
    }
}

