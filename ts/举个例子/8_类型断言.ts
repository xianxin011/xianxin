// 类型断言
/// 类型断言可以用来收容指定一个值的类型

// 值 as 类型 或 <类型> 值

// 类型断言的用途

/// 将一个联合类型断言为其中一个类型

/**
 * 当TypeScript 不确定一个联合类型的变量到底时那个类型的时候，我们只能访问
 * 联合类型的所有类型中的共有属性或方法
 */

interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim: void;
}

function getName(animal: Cat | Fish) {
  return animal.name;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true;
  } else {
    return false;
  }
}
/// 类型断言只能够 欺骗 TypeScript 编译器，无法避免运行时的错误，反而滥用
/// 类型断言可能会导致运行时错误

// 将一个父类断言为更加具体的子类

// 当类之间有继承关系时，类型断言也是常见的

// class ApiError extends Error {
//   code: number = 0;
// }

// class HttpError extends Error {
//   statusCode: number = 200;
// }

// function isAipError(error: Error){
//     if(typeof(error as ApiError).code === 'number'){
//         return true;
//     }
//     return false;
// }

interface ApiError extends Error {
  code: number;
}

interface HttpError extends Error {
  statusCode: number;
}
// 接口是一个类型，并不是一个真正的值
// function isApiError(error:Error){
//     if(error instanceof ApiError){
//         return true;
//     }else{
//         return false
//     }
// }

// 正确做法
function isApiError(error: Error) {
  if (typeof (error as ApiError).code) {
    return true;
  } else {
    return false;
  }
}

// 将任何一个类型断言为any
// 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any

window.foo = 1;

(window as any).foo = 11;

// 将调用后的放回值断言成一个精确的类型，这样就方便了后续的操作：

function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Cat;

tom.run();

// 类型断言的限制

interface Animal {
  name: string;
}

interface Cat {
  name: string;
  run(): void;
}

let tomm: Cat = {
  name: 'Tom',
  run: () => {
    console.log('run');
  },
};
// 为什么Cat 类型的 tomm 赋值给了 Animal 类型的animal(有三种方式可以解决)
let animal: Animal = tomm;

// Animal 兼容 Cat

interface Animal {
  name: string;
}

interface Cat {
  name: string;
  run(): void;
}

function testAnimal(animal: Animal) {
  return animal as Cat;
}

function testCat(cat: Cat) {
  return cat as Animal;
}

// 双重断言

// 将任何一个类型断言为任何一个另外类型

interface Cat{
    run():void
}

interface Fish{
    eat():void;
}
// 除非迫不得已，千万别用双重断言
function testCat(cat:Cat){
    return ( cat as any as isFish)
}


// 类型断言 vs 类型转换

// 声明
function toBoolean(something:any):boolean{
    return something as boolean
}

// 改变类型
function toBoolean1 (something:any):boolean{
    return Boolean(something)
}

// toBoolean1(1)