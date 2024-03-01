// 泛型是指在定义函数、接口或类的时候，不预先定义具体类型，而在使用
// 的时候再定义的一种类型

// Array<any> 允许数组的每一项都为任意类型，但是我们预期的时，它
/**
 * 数组中每一项都应该时输入的value的类型
 */

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// 多个类型的参数

// 定义泛型的时候， 可以一次定义多个类型参数

function swap<T, U>(tuple: [T, U]): [T, U] {
  return [tuple[0], tuple[1]];
}

// 泛型约束

// 在函数内部使用泛型变量的时候， 由于事先不知道它是哪种类型， 所有不能随意
// 操作它的属性或方法

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T) {
  console.log(arg.length);
  return arg;
}

// 泛型接口

interface SearchFunc {
  <T>(length: number, value: T): Array<T>;
}

let searchFunc: SearchFunc;
searchFunc = function <T>(length: number, value: T): Array<T> {
  let result: T[];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
