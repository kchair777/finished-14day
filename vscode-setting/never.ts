function error(message:string):never {
    throw new Error(message);
}

function fail(){
    return error("failed");
}

function infiniteLoop():never{
    while(true){}
}

// let a = string = "hello";
// if (let a:never "string"){
//     a;
// }

declare const a: string | number;

if(typeof a === "string"){
    a:
}
type Indexable<T> = T extends string ? T & {[index:string]:any}:never;
const b:Indexable<{}> = '';

