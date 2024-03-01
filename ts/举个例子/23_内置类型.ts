/*
 * @Author: zhxx
 * @Email: zhuxx@knownsec.com
 * @Date: 2021-10-13 16:39:45
 * @LastEditTime: 2021-10-14 18:05:27
 * @LastEditors: zhuxx
 * @Description: 内置类型   
 * @FilePath: /TS/23_内置类型.ts
 */

/**
 * Partial 允许你将T类型的所有属性设为可选
 */

interface PartialType {
    id:number;
    name:string;
    age:number;
    lastName:string;
    firstName:string;
}

function showType(args:Partial<PartialType>){
    console.log(args); 
}

interface RequireType{
    id:number;
    firstName:string;
    lastName:string;
}

function shwoTypeRequire(args:Required<RequireType>){
    console.log(args);
}

interface ReadonlyType{
    id:number;
    name:string;
}

// 一旦初始值被确定后就只能被读取
function showTypeReadonly(args:Readonly<ReadonlyType>){
    console.log(args);
}

/**
 * Pick 从 T 中取出 K 中指定的属性
 */

 interface PickType {
    id: number
    firstName: string
    lastName: string
}

function showTypePick(args:Pick<PickType,'firstName'|'lastName'>){
    console.log(args);
    
}

/**
 * Omit 
 */
function showTypeOmit(args:Omit<PickType,"id">){
    console.log(args);
}



