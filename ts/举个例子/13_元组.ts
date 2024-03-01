// 数组合并了相同类型的对象，而元组合并了不同类型的对象

let Tom: [string, number] = ['Tom',25];

// 越界元素

// 当添加越界的元素时， 它的类型会被限制为元组中每个类型的联合类型

let tom:[string, number];

tom = ['mary',123];

tom.push(234);

