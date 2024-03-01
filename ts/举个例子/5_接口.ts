// 我们室友接口来定义对象的类型

/// 规范: 接口一般首字母大写

// 严格的要求
/// 定义的变量比几口少了一些属性时不允许的
/// 多一些属性也是不允许的

// 其他 
// 任意属性
// 可选属性
// 只读属性 readonly 
/// 只读的约束存在与第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// 
interface Person {
    readonly id: number,
    age: number,
    name: string,
    action?: string,
    job?: string,
}

let Tom: Person = {
    id: 1,
    name: 'Tom',
    age: 25
}

console.log(Tom.id);
