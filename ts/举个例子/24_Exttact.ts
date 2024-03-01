/*
 * @Author: zhxx
 * @Email: zhuxx@knownsec.com
 * @Date: 2021-10-14 18:05:43
 * @LastEditTime: 2021-10-14 18:35:14
 * @LastEditors: zhuxx
 * @Description:
 * @FilePath: /TS/24_Exttact.ts
 */
/**
 * Extact
 */

interface FirstType {
  id: string;
  firstName: string;
  lastName: string;
}

interface SecondType {
  id: string;
  firstName: string;
  address: string;
  city: string;
}

type ExtactType = Extract<keyof FirstType, keyof SecondType>;

type newType = {
  id: ExtactType;
  firstName: ExtactType;
};

const obj: newType = {
  id: 'id',
  firstName: 'firstName',
};
console.log(obj);

type ExcludType = Exclude<keyof FirstType, keyof SecondType>;

type newType2 = {
  name: ExcludType;
};

const obj2: newType2 = {
  name: 'lastName',
};

interface EmployeeType{
    id:number;
    fullname:string;
    role:string;
}

let employ:Record<ExcludType,EmployeeType>={
    lastName:{id:123,fullname:'123',role:'student'}
}

type NonNullableType = string | number | null | undefined

function showType(args: NonNullable<NonNullableType>) {
    console.log(args)
}

showType("test")
// Output: "test"

showType(1)
// Output: 1

showType(null)
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

showType(undefined)
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.


type StringMap <T> ={
    [P in keyof T]:string
}

function showType(args:StringMap<{id:number,name:string}>){
    console.log(args)
}

showType({id:'123',name:'hahahha'})

