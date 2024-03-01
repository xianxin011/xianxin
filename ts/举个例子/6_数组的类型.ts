// 数组类型有多种定义方式，比较灵活

let fibonacci: number[] = [1, 2, 34, 5];

// 数组泛型

let fib: Array<number> = [1, 2, 3, 3, 4, 5, 4];

// 用接口来表示数组

interface NumberArray {
  [index: number]: number;
}

let fi: NumberArray = [1, 2, 3, 3, 5];

// 类数组

function sum():void{
    let args:{
        [index: number]: number,
        length: number,
        callee: Function
    } = arguments;
    console.log(args);
}

