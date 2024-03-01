/*
 * @Author: zhxx
 * @Email: zhuxx@knownsec.com
 * @Date: 2021-10-13 16:24:26
 * @LastEditTime: 2021-10-13 16:38:06
 * @LastEditors: zhuxx
 * @Description:
 * @FilePath: /TS/22_泛型.ts
 */
function showType<T>(arg: T) {
  console.log(arg);
}

showType('fadfsadf');

interface GenericType<T, U> {
  id: T;
  name: U;
}

function showTypeG(args: GenericType<number, string>) {
  console.log(args);
}

showTypeG({ id: 123, name: 'sdfaf' });
