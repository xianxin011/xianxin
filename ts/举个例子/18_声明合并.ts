// 函数合并

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

interface Alarm {
    price: number;
}

interface Alarm {
    weight: number;
}

// 合并的属性的类型必须时唯一的

