/*
 * @Author: zhxx
 * @Email: zhuxx@knownsec.com
 * @Date: 2021-10-13 15:54:48
 * @LastEditTime: 2021-10-13 15:59:57
 * @LastEditors: zhuxx
 * @Description: 
 * @FilePath: /TS/20_交叉类型.ts
 */
type LeftType = {
    id:number;
    left:string;
}

type RightType = {
    id:number;
    right:string;
}

type commonType = LeftType & RightType;

const showType = (pramas:commonType)=>{
    console.log(pramas);
}

console.log(showType({id:1,left:'left',right:'right'}));
