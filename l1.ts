let a: number;

let b: any;

//unknow实际上就是一个类型安全的any
//unknow类型的变量，不能直接赋值给其他变量
let c: unknown;
c = "hh";
let d: string;
// d=c

if (typeof c == "string") {
  d = c;
}

//类型断言，用来告诉解析器变量的实际类型
d = c as string;
d = <string>c;

function log(num: number): void {
  return null;
}

//对象
let e: { name: string; [propsName: string]: any };
e = { name: "hh", age: 18 };

//函数
let f: (flag: boolean) => boolean;
f = (flag) => {
  return true;
};

//数组
let strarr: string[];
strarr = ["1", "2", "3", null, undefined];
let arr: Array<string>;
arr = ["1"];

//元组
let tuple: [string];
tuple = ["1"];

//枚举
enum Sex {
  male,
  female,
}
let obj: { name: string; sex: Sex };
obj = { name: "zhangsan", sex: Sex.male };
console.log(obj);

//类型别名
type multiple = 1 | 2 | 3 | 4 | 5;
let m: multiple = 2;
