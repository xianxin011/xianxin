/*
 * @Author: zhxx
 * @Email: zhuxx@knownsec.com
 * @Date: 2021-10-13 16:17:49
 * @LastEditTime: 2021-10-13 16:20:06
 * @LastEditors: zhuxx
 * @Description:
 * @FilePath: /TS/21_联合类型.ts
 */
type UnionType = string | number;
function ShowType(arg: UnionType) {
  console.log(arg);
}

ShowType('test');

ShowType(123);
